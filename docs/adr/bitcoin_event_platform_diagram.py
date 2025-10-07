# Bitcoin Event Platform - AWS Cloud-Native Architecture (Security beside Core Services)
# Run: pip install diagrams graphviz

from diagrams import Diagram, Cluster, Edge
from diagrams.aws.network import APIGateway, CloudFront, ELB
from diagrams.aws.compute import ECS, Lambda
from diagrams.aws.security import Cognito, IAM, WAF
from diagrams.aws.database import RDS, ElastiCache
from diagrams.aws.integration import SNS
from diagrams.aws.storage import S3
from diagrams.aws.management import Cloudwatch
from diagrams.aws.engagement import SES
from diagrams.onprem.client import Users
from diagrams.onprem.queue import Kafka
from diagrams.generic.compute import Rack
from diagrams.custom import Custom  # For custom logos

with Diagram(
    "Bitcoin Event Platform - AWS Cloud-Native Architecture (Security beside Core Services)",
    show=False,
    direction="LR",
    graph_attr={
        "splines": "ortho",
        "ranksep": "1.1",
        "nodesep": "0.9",
        "pad": "0.5",
        "fontsize": "12",
        "bgcolor": "white",
    },
):

    user = Users("User")

    with Cluster("Frontend Layer"):
        frontend = CloudFront("Next.js (TypeScript)\nAmplify / CloudFront")

    # === AWS Cloud Boundary ===
    with Cluster("AWS Cloud Infrastructure"):
        # Networking + Compute (Left)
        with Cluster("Routing & Compute"):
            apigw = APIGateway("API Gateway")
            alb = ELB("Application Load Balancer")
            ecs = ECS("ECS (Fargate)")
            lambda_fn = Lambda("Lambda")

        # Core + Security side-by-side (Center section)
        with Cluster("Core Services & Security"):
            with Cluster("Core Microservices"):
                auth = Cognito("Auth Service\n(Cognito)")
                event = Rack("Event Service")
                pay = Rack("Payments Service\n(Fiat + Crypto)")
                merch = Rack("Merch / Orders Service")
                reward = Rack("Rewards Service")
                notif = Rack("Notifications Service")
                analytics = Rack("Analytics / Logging Service")

            with Cluster("Security & Observability"):
                iam = IAM("IAM Roles / Policies")
                waf = WAF("WAF Firewall")
                logs = Cloudwatch("CloudWatch Logs")
                ses = SES("SES (Emails)")
                sns = SNS("SNS (Push / SMS)")

        # Data & Messaging horizontally aligned (Below Core)
        with Cluster("Data & Messaging Layer"):
            rds = RDS("RDS (PostgreSQL)")
            redis = ElastiCache("ElastiCache (Redis)")
            queue = Kafka("SQS / Kafka (MSK)")
            s3 = S3("S3 (Media Storage)")

    # === External Payment Providers — horizontal alignment with logos ===
    with Cluster("External Payment Providers"):
        stripe = Custom("Stripe (Fiat)", "./icons/stripe.png")
        razorpay = Custom("Razorpay (UPI)", "./icons/razorpay.png")
        coinbase = Custom("Coinbase (Crypto)", "./icons/coinbase.png")
        bitgo = Custom("BitGo (Crypto)", "./icons/bitgo.png")

        # horizontal arrangement
        stripe - razorpay - coinbase - bitgo

    # ==== Primary Flows ====
    user >> Edge(color="blue", label="Browse / Register / Buy / Rewards") >> frontend
    frontend >> Edge(color="dodgerblue", label="REST / GraphQL") >> apigw
    apigw >> alb >> ecs

    # ECS invokes microservices
    ecs >> Edge(color="gray", style="dotted", label="Invoke") >> [auth, event, pay, merch, reward, notif, analytics]

    # Core Data Flows
    auth >> Edge(color="orange") >> [rds, iam]
    event >> Edge(color="orange") >> rds
    merch >> Edge(color="orange") >> rds

    reward >> Edge(color="gold") >> [rds, redis]
    reward >> Edge(color="gold", style="dashed", label="Async Queue") >> queue

    pay >> Edge(color="green", label="Txn + Ledger") >> [rds, redis, queue]
    pay >> Edge(color="green", label="Fiat / Crypto Payments") >> [stripe, razorpay, coinbase, bitgo]

    # Rewards → Merch
    reward >> Edge(color="goldenrod", label="Redeem Points") >> merch

    # Notifications → Communication
    notif >> Edge(color="orange", label="Emails / Push") >> [sns, ses]

    # Analytics → Data + Logs
    analytics >> Edge(color="purple", label="Data Sync") >> [rds, redis]
    analytics >> Edge(color="purple", style="dashed", label="Logs / Metrics") >> logs

    # Observability connections
    for svc in [auth, event, pay, merch, reward, notif, analytics, rds, queue, waf]:
        svc >> Edge(color="gray", style="dotted", label="App / Security Logs") >> logs
