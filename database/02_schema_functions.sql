-- Functions and triggers

-- OTP allowlist: boolean check via admins table
CREATE OR REPLACE FUNCTION is_allowed_admin(email_input text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  select exists (
    select 1 from admins where lower(email) = lower(email_input)
  );
$$;

GRANT EXECUTE ON FUNCTION is_allowed_admin(text) TO anon;

-- Auto-fill admins.email from auth.users
CREATE OR REPLACE FUNCTION set_admin_email()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  u_email text;
BEGIN
  SELECT email INTO u_email FROM auth.users WHERE id = NEW.user_id;
  IF u_email IS NULL THEN
    RAISE EXCEPTION 'No auth.users row for user_id=%', NEW.user_id;
  END IF;
  NEW.email := lower(u_email);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_admins_set_email ON admins;
CREATE TRIGGER trg_admins_set_email
BEFORE INSERT OR UPDATE OF user_id ON admins
FOR EACH ROW
EXECUTE FUNCTION set_admin_email();


