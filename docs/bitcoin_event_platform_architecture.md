# Bitcoin Event Platform – AWS Cloud-Native Architecture (Security beside Core Services)

![Bitcoin Event Platform Architecture](./bitcoin_event_platform_-_aws_cloud-native_architecture_(security_beside_core_services).png)

## 🧭 Overview

This document represents the **Bitcoin Event Platform** — a fully cloud-native, modular application deployed on **AWS**.  
It supports **event management, payments (fiat + crypto)**, **rewards**, and **real-time analytics**, built with scalability and security in mind.

The diagram above shows all key layers — frontend, compute, data, observability, and integrations with third-party payment providers.

---

## 🏗️ Architecture Layers

### 1️⃣ Frontend Layer
- **Next.js (TypeScript)** web app deployed via **AWS Amplify / CloudFront**.
- Handles user registration, browsing, ticket purchases, and rewards.

---

### 2️⃣ Routing & Compute
| Component | Description |
|------------|-------------|
| **Amazon API Gateway** | Entry point for REST / GraphQL APIs. |
| **AWS ALB (Application Load Balancer)** | Routes traffic to containerized backend services. |
| **AWS ECS (Fargate)** | Runs microservices as isolated tasks. |
| **AWS Lambda** | Executes lightweight event-driven functions. |

---

### 3️⃣ Core Services & Security (Side-by-Side)
| Service | Role |
|----------|------|
| **Auth (Cognito)** | Handles authentication and identity federation. |
| **Event Service** | Manages events, schedules, and ticketing. |
| **Payments Service** | Processes fiat & crypto payments. |
| **Merch / Orders Service** | Handles merchandise catalog & orders. |
| **Rewards Service** | Manages loyalty and referral programs. |
| **Notifications Service** | Sends emails, SMS, and push alerts. |
| **Analytics Service** | Tracks metrics and usage insights. |

#### Security & Observability (Aligned Horizontally)
| Component | Purpose |
|------------|----------|
| **AWS IAM** | Access control and policies. |
| **AWS WAF** | Web firewall and DDoS protection. |
| **Amazon CloudWatch** | Central logging and metrics. |
| **Amazon SES / SNS** | Communication via email & push notifications. |

> The **Security & Observability** section sits **side-by-side** with Core Services in the diagram to reflect how security & monitoring are embedded within runtime operations.

---

### 4️⃣ Data & Messaging Layer
| Component | Role |
|------------|------|
| **Amazon RDS (PostgreSQL)** | Primary relational database. |
| **Amazon ElastiCache (Redis)** | High-performance caching. |
| **Amazon S3** | Object storage for media & assets. |
| **Amazon SQS / Kafka (MSK)** | Asynchronous message processing. |

---

### 5️⃣ External Payment Providers
External payment systems are visualized with real brand logos using `Custom` diagram nodes.

| Provider | Type | Description |
|-----------|------|-------------|
| ![Stripe](./adr/icons/stripe.png) **Stripe** | Fiat | Global card & bank payments. |
| ![Razorpay](./adr/icons/razorpay.png) **Razorpay (UPI)** | Fiat | UPI and Indian payments. |
| ![Coinbase](./adr/icons/coinbase.png) **Coinbase Commerce** | Crypto | Accepts BTC, ETH, USDC. |
| ![BitGo](./adr/icons/bitgo.png) **BitGo** | Crypto | Custodial wallet and settlements. |

---

## 🔁 Data Flows

1. **User → Frontend:** Interacts via Next.js web app.  
2. **Frontend → API Gateway → ALB:** Requests routed to backend.  
3. **ECS / Lambda:** Executes business logic per service.  
4. **Payments Service:** Interacts with databases & external payment gateways.  
5. **Rewards Service:** Publishes async events via Kafka/SQS.  
6. **Analytics Service:** Streams data to CloudWatch & RDS.  
7. **Security & Observability:** Continuous logging and runtime protection.

---

## ⚙️ Commands to Generate Diagram

### 🪜 Step-by-Step Setup

```bash
# 1. Navigate to your docs folder
mkdir -p docs/adr/icons
cd docs/adr

# 2. Install dependencies
pip install diagrams graphviz

# 3. Add required logos (PNG or SVG, transparent background)
#    Place these inside ./icons/
#    stripe.png, razorpay.png, coinbase.png, bitgo.png

# 4. Run the diagram generator
python bitcoin_event_platform_diagram.py

# 5. Verify the output
ls | grep bitcoin_event_platform
