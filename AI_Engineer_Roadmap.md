# AI Engineer 120-Day Daily Career Roadmap

> **Target Goal**: Take a Computer Science & AI student with core Python, SQL, C++, PyTorch, and basic ML experience to a top-tier **AI Engineer** using 100% high-quality free resources.
> **Daily Commitment**: ~1 to 1.5 hours/day, 5 days per week across 24 weeks.

---

## 📌 Phase 1: Math & ML Rigor Refresh (Weeks 1–4, Days 1–20)
Focus: Deep mathematical intuition for linear algebra, multivariate calculus, probability/statistics & deriving algorithms from scratch.

- **Day 1**: Derive Vector Spaces, Matrix Multiplications & Linear Transformations
  - *Resource*: [3Blue1Brown Linear Algebra Ch 1-4](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
  - *Done Condition*: Markdown notes deriving matrix transformations with 3 geometric examples.
- **Day 2**: Eigenvalues, Eigenvectors & Eigendecomposition Intuition
  - *Resource*: [3Blue1Brown Ch 14](https://www.youtube.com/watch?v=PFDu9oVAE-g) & [MIT 18.06 Strang Lecture 21](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)
  - *Done Condition*: Handwritten/LaTeX derivation of $A v = \lambda v$ and PCA projection matrix.
- **Day 3**: Singular Value Decomposition (SVD) & Low-Rank Approximation
  - *Resource*: [StatQuest SVD](https://www.youtube.com/watch?v=gXbThCXjZFM) & [Steve Brunton SVD](https://www.youtube.com/watch?v=gXbThCXjZFM)
  - *Done Condition*: Pure NumPy implementation of SVD image compression notebook in GitHub.
- **Day 4**: Matrix Calculus & Vector Gradients ($\nabla_{\mathbf{w}} \mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w}$)
  - *Resource*: [Matrix Calculus for Deep Learning (explained.ai)](https://explained.ai/matrix-calculus/)
  - *Done Condition*: Step-by-step derivation sheet for Linear Regression Normal Equation gradient.
- **Day 5**: Multivariate Derivatives, Jacobians & Hessians
  - *Resource*: [Khan Academy Multivariable Calculus](https://www.khanacademy.org/math/multivariable-calculus)
  - *Done Condition*: Derivation notebook computing Hessian matrix of 2D loss surfaces.
- **Day 6**: Maximum Likelihood Estimation (MLE) vs MAP Estimation
  - *Resource*: [StatQuest MLE](https://www.youtube.com/watch?v=XepXtl9YKwc)
  - *Done Condition*: Python script demonstrating Gaussian MLE optimization via scipy.optimize.
- **Day 7**: Bayes Theorem, Prior, Likelihood, Posterior & Conjugate Priors
  - *Resource*: [StatQuest Bayes Theorem](https://www.youtube.com/watch?v=9wCnvr7Xw4E)
  - *Done Condition*: Written summary explaining Bayesian inference vs Frequentist ML.
- **Day 8**: Probability Distributions: Gaussian, Bernoulli, Multinomial, Dirichlet
  - *Resource*: [Khan Academy Probability](https://www.khanacademy.org/math/statistics-probability)
  - *Done Condition*: Jupyter Notebook sampling & plotting 4 distributions with SciPy.
- **Day 9**: Information Theory: Entropy, Cross-Entropy & KL Divergence
  - *Resource*: [A Visual Information Theory (Colah's Blog)](https://colah.github.io/posts/2015-09-Visual-Information/)
  - *Done Condition*: Pure NumPy implementation of KL Divergence and Cross-Entropy loss functions.
- **Day 10**: Hypothesis Testing, p-values, A/B Testing & Confidence Intervals
  - *Resource*: [StatQuest A/B Testing & p-values](https://www.youtube.com/watch?v=VEZqfKy0pS0)
  - *Done Condition*: A/B testing simulation notebook analyzing conversion rates with t-test.
- **Day 11**: Gradient Descent Variants (Batch, Mini-batch, SGD) & Convexity
  - *Resource*: [d2l.ai Optimization Algorithms](https://d2l.ai/chapter_optimization/index.html)
  - *Done Condition*: NumPy script comparing trajectory of Batch GD vs Mini-Batch SGD on Rosenbrock function.
- **Day 12**: Momentum, Nesterov Accelerated Gradient & AdaGrad
  - *Resource*: [d2l.ai Momentum & AdaGrad](https://d2l.ai/chapter_optimization/momentum.html)
  - *Done Condition*: Notebook implementing Momentum and AdaGrad from mathematical equations.
- **Day 13**: RMSProp & Adam Optimizer Derivation
  - *Resource*: [StatQuest Adam Optimizer](https://www.youtube.com/watch?v=JXQT_vxqwIs)
  - *Done Condition*: Clean Python implementation of Adam from scratch (no PyTorch autograd).
- **Day 14**: Learning Rate Schedules & Warmup Strategies (Cosine Annealing)
  - *Resource*: [Fast.ai Practical Deep Learning for Coders](https://course.fast.ai/)
  - *Done Condition*: PyTorch script plotting custom LR schedules and LR finder curve.
- **Day 15**: Constrained Optimization & Lagrange Multipliers
  - *Resource*: [Khan Academy Lagrange Multipliers](https://www.khanacademy.org/math/multivariable-calculus)
  - *Done Condition*: Solved 3 lagrangian optimization problems with LaTeX steps in GitHub notebook.
- **Day 16**: Support Vector Machine (SVM) Primal & Dual Formulations
  - *Resource*: [StatQuest SVM Series](https://www.youtube.com/watch?v=efR1C6CvhmE)
  - *Done Condition*: Handwritten derivation of SVM dual form and KKT conditions summary.
- **Day 17**: SVM Dual Solver using Convex Optimization (CVXPY)
  - *Resource*: [CVXPY Quadratic Programming Docs](https://www.cvxpy.org/)
  - *Done Condition*: Working Python notebook solving hard-margin SVR/SVC with CVXPY.
- **Day 18**: Decision Tree Math: Gini Impurity & Information Gain
  - *Resource*: [StatQuest Decision Trees](https://www.youtube.com/watch?v=_L39rN6gz7Y)
  - *Done Condition*: From-scratch Python class DecisionTreeRegressor without scikit-learn.
- **Day 19**: Gradient Boosting Math Derivation & Second-Order Taylor Expansion
  - *Resource*: [StatQuest XGBoost / Gradient Boost](https://www.youtube.com/watch?v=3CC4N4z3GJc)
  - *Done Condition*: Derivation markdown explaining second-order Taylor expansion in XGBoost.
- **Day 20**: Phase 1 Capstone: Math Benchmark Notebook
  - *Resource*: Self-Assessment
  - *Done Condition*: Single GitHub repo compiling all 20 derived equations & NumPy implementations.

---

## 📌 Phase 2: Deep Learning Mastery (Weeks 5–9, Days 21–45)
Focus: Autograd engines from scratch, Karpathy's Zero-to-Hero, CS231n vision architectures, and PyTorch performance tuning.

- **Day 21**: Micrograd Part 1: Build Value object & DAG Computational Graph
  - *Resource*: [Karpathy Neural Networks: Zero to Hero Video 1](https://www.youtube.com/watch?v=VMj-3lSmall)
  - *Done Condition*: GitHub repo `micrograd-from-scratch` with working forward pass DAG.
- **Day 22**: Micrograd Part 2: Backpropagation implementation (`_backward` chain rule)
  - *Resource*: [Karpathy Video 1 (cont)](https://www.youtube.com/watch?v=VMj-3lSmall)
  - *Done Condition*: Micrograd repo passing backpropagation verification against PyTorch tensors.
- **Day 23**: Makemore Part 1: Bigram Character-Level Language Model
  - *Resource*: [Karpathy Video 2: Makemore Bigram](https://www.youtube.com/watch?v=PaCmqyFuDGE)
  - *Done Condition*: Working Jupyter notebook generating names with single-layer neural net.
- **Day 24**: Makemore Part 2: MLP Language Model (Bengio et al. 2003 architecture)
  - *Resource*: [Karpathy Video 3: Bengio MLP](https://www.youtube.com/watch?v=TCH_1BHY54I)
  - *Done Condition*: Notebook training Bengio MLP with embedding layer and cross-entropy loss.
- **Day 25**: Makemore Part 3: Activations, Gradients & Batch Normalization Mechanics
  - *Resource*: [Karpathy Video 4: BatchNorm](https://www.youtube.com/watch?v=P6sfmTEfez8)
  - *Done Condition*: Diagnostic plots notebook showing activation histograms & dead neuron analysis.
- **Day 26**: Makemore Part 4: Becoming a Backprop Ninja (Manual Backpropagation)
  - *Resource*: [Karpathy Video 5: Backprop Ninja](https://www.youtube.com/watch?v=q8SA3rM6ckI)
  - *Done Condition*: Notebook deriving manual gradient code for cross-entropy, linear, and batchnorm.
- **Day 27**: Makemore Part 5: WaveNet Architecture & Dilated Convolutions
  - *Resource*: [Karpathy Video 6: WaveNet](https://www.youtube.com/watch?v=t3YJ5hKiMQ0)
  - *Done Condition*: PyTorch WaveNet model training on character dataset with loss < 2.0.
- **Day 28**: PyTorch Custom Autograd Functions (`torch.autograd.Function`)
  - *Resource*: [PyTorch Custom Autograd Tutorial](https://pytorch.org/tutorials/beginner/examples_autograd/two_step_layer.html)
  - *Done Condition*: PyTorch script with custom forward/backward C++/Python tensor extension.
- **Day 29**: Vanishing/Exploding Gradients, Xavier & Kaiming Initialization
  - *Resource*: [d2l.ai Numerical Stability & Init](https://d2l.ai/chapter_deep-learning-basics/numerical-stability-and-init.html)
  - *Done Condition*: Notebook demonstrating variance preservation across 50-layer deep networks.
- **Day 30**: PyTorch Custom Datasets & DataLoader Performance Optimization
  - *Resource*: [PyTorch Performance Tuning Guide](https://pytorch.org/tutorials/recipes/recipes/tuning_guide.html)
  - *Done Condition*: Optimized PyTorch data pipeline loading benchmarked at >1000 samples/sec.
- **Day 31**: CS231n Convolutional Neural Networks Mechanics
  - *Resource*: [CS231n Module 1 Convolutional Networks](https://cs231n.github.io/convolutional-networks/)
  - *Done Condition*: Pure NumPy implementation of 2D Convolution forward and backward pass.
- **Day 32**: ResNet Architecture & Residual Skip Connections
  - *Resource*: [ResNet Paper (He et al. 2015)](https://arxiv.org/abs/1512.03385)
  - *Done Condition*: PyTorch ResNet-18 built from basic blocks without `torchvision.models`.
- **Day 33**: EfficientNet & Depthwise Separable Convolutions
  - *Resource*: [d2l.ai Modern Convolutional Networks](https://d2l.ai/chapter_convolutional-modern/index.html)
  - *Done Condition*: Comparative notebook measuring FLOPs, parameters, and latency across CNN families.
- **Day 34**: Vision Transformers (ViT) Architecture
  - *Resource*: [ViT Paper (Dosovitskiy et al. 2020)](https://arxiv.org/abs/2010.11929)
  - *Done Condition*: PyTorch ViT implementation trained on CIFAR-10 dataset.
- **Day 35**: Object Detection: Anchor Boxes, IoU & NMS
  - *Resource*: [CS231n Object Detection Lecture](https://www.youtube.com/watch?v=nDPWywWRIRo)
  - *Done Condition*: Python notebook implementing IoU calculation and Non-Maximum Suppression (NMS).
- **Day 36**: Fast.ai Practical Deep Learning Workflows
  - *Resource*: [Fast.ai Practical Deep Learning Course](https://course.fast.ai/)
  - *Done Condition*: Kaggle notebook trained using fast.ai achieving competitive image classification.
- **Day 37**: Mixed Precision Training (`torch.cuda.amp`)
  - *Resource*: [PyTorch Automatic Mixed Precision Docs](https://pytorch.org/docs/stable/amp.html)
  - *Done Condition*: PyTorch script measuring memory savings and speedup using autocast & GradScaler.
- **Day 38**: Distributed Data Parallel (DDP) in PyTorch
  - *Resource*: [PyTorch DDP Tutorial](https://pytorch.org/tutorials/intermediate/ddp_tutorial.html)
  - *Done Condition*: Script configured with torchrun executing multi-GPU / multi-process training.
- **Day 39**: Model Interpretability: Grad-CAM & Saliency Maps
  - *Resource*: [Captum PyTorch Library Docs](https://captum.ai/)
  - *Done Condition*: Grad-CAM heatmap visualization notebook for custom ResNet classification.
- **Day 40**: Deep Learning Debugging Checklist
  - *Resource*: [Karpathy Recipe for Training Neural Nets](https://karpathy.github.io/2019/04/25/recipe/)
  - *Done Condition*: Debugging checklist document + notebook diagnosing intentionally broken models.
- **Day 41**: Kaggle Competition Pipeline Warmup
  - *Resource*: [Kaggle Competitions Hub](https://www.kaggle.com/competitions)
  - *Done Condition*: Baseline model submission score recorded on Kaggle leaderboard.
- **Day 42**: Kaggle Cross-Validation Strategy & Ensembling
  - *Resource*: [Kaggle Grandmaster Code Repos](https://www.kaggle.com/code)
  - *Done Condition*: Stratified K-Fold CV pipeline with model blending producing higher test score.
- **Day 43**: ONNX Export & ONNX Runtime Inference
  - *Resource*: [PyTorch ONNX Export Tutorial](https://pytorch.org/tutorials/advanced/super_resolution_with_onnxruntime.html)
  - *Done Condition*: Exported ONNX model running inference in ONNX Runtime with 2x latency reduction.
- **Day 44**: Model Quantization (Post-Training INT8 Quantization)
  - *Resource*: [PyTorch Quantization Guide](https://pytorch.org/docs/stable/quantization.html)
  - *Done Condition*: PyTorch INT8 quantized model notebook showing size reduction with <1% accuracy drop.
- **Day 45**: Phase 2 Capstone: Deep Neural Engine Repo
  - *Resource*: Phase 2 Capstone Submission
  - *Done Condition*: Fully documented GitHub repository containing Micrograd + ViT + ONNX export.

---

## 📌 Phase 3: NLP, Transformers & LLMs (Weeks 10–14, Days 46–70)
Focus: Building GPT from scratch, LoRA/QLoRA fine-tuning, RAG pipelines, Hugging Face Agents & paper teardowns.

- **Day 46**: Paper Deep Dive: "Attention Is All You Need" (Vaswani et al. 2017)
  - *Resource*: [Attention Paper PDF](https://arxiv.org/abs/1706.03762) & [Yannic Kilcher Video](https://www.youtube.com/watch?v=iDUlXeriv14)
  - *Done Condition*: Annotations & mathematical derivation of Scaled Dot-Product & Multi-Head Attention.
- **Day 47**: Multi-Head Self-Attention & Causal Masking in PyTorch
  - *Resource*: [Karpathy Let's Build GPT Video](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - *Done Condition*: Working PyTorch module CausalSelfAttention verified with shape assertions.
- **Day 48**: NanoGPT Part 1: Full Transformer Decoder Architecture
  - *Resource*: [Karpathy NanoGPT Video](https://www.youtube.com/watch?v=kCc8FmEb1nY)
  - *Done Condition*: Complete decoder-only GPT architecture built from scratch in PyTorch.
- **Day 49**: NanoGPT Part 2: BPE Tokenizer & Training on Shakespeare
  - *Resource*: [Karpathy minbpe Tokenizer Repo](https://github.com/karpathy/minbpe)
  - *Done Condition*: Trained NanoGPT model generating coherent Shakespeare text.
- **Day 50**: Rotary Position Embeddings (RoPE) & FlashAttention
  - *Resource*: [RoFormer Paper](https://arxiv.org/abs/2104.09864) & [FlashAttention Paper](https://arxiv.org/abs/2205.14135)
  - *Done Condition*: Technical breakdown document detailing memory complexity O(N^2) vs O(N).
- **Day 51**: Hugging Face NLP Course Ch 1-3: Pipelines & Trainer
  - *Resource*: [Hugging Face Free NLP Course](https://huggingface.co/learn/nlp-course/chapter1/1)
  - *Done Condition*: Script fine-tuning BERT on custom classification dataset using HF Trainer.
- **Day 52**: Paper Deep Dive: LoRA (Low-Rank Adaptation)
  - *Resource*: [LoRA Paper PDF](https://arxiv.org/abs/2106.09685) & [Yannic Kilcher Video](https://www.youtube.com/watch?v=dA-NhCtrrVE)
  - *Done Condition*: Notebook implementing custom LoRA linear layer wrapper.
- **Day 53**: QLoRA & 4-bit Quantized Fine-Tuning
  - *Resource*: [Hugging Face PEFT Documentation](https://huggingface.co/docs/peft/index)
  - *Done Condition*: Kaggle/Colab notebook fine-tuning Llama-3/Mistral-7B with 4-bit NF4 quantization.
- **Day 54**: Supervised Fine-Tuning (SFT) & Dataset Formatting
  - *Resource*: [Hugging Face TRL Library Docs](https://huggingface.co/docs/trl/index)
  - *Done Condition*: Custom dataset formatted in ChatML format & trained with SFTTrainer.
- **Day 55**: Alignment Math: Direct Preference Optimization (DPO) vs PPO
  - *Resource*: [DPO Paper (Rafailov et al.)](https://arxiv.org/abs/2305.18290)
  - *Done Condition*: Markdown paper summary contrasting RLHF reward models with DPO loss equation.
- **Day 56**: RAG Architecture Part 1: Embeddings & Vector DB Ingestion
  - *Resource*: [LlamaIndex Documentation](https://docs.llamaindex.ai/)
  - *Done Condition*: Notebook implementing Document Ingestion & Chunking pipeline with ChromaDB.
- **Day 57**: RAG Architecture Part 2: Hybrid Search (BM25 + Vector Search)
  - *Resource*: [Hugging Face Vector Search Guide](https://huggingface.co/blog/getting-started-with-embeddings)
  - *Done Condition*: Python script demonstrating Hybrid Search (BM25 + Dense Vectors) with Reciprocal Rank Fusion.
- **Day 58**: RAG Architecture Part 3: Cross-Encoder Reranking
  - *Resource*: [Sentence-Transformers Reranking Docs](https://www.sbert.net/)
  - *Done Condition*: Comparative benchmark measuring retrieval Precision@K before and after reranking.
- **Day 59**: RAG Evaluation Framework (Ragas)
  - *Resource*: [Ragas Evaluation Framework Docs](https://docs.ragas.io/)
  - *Done Condition*: Ragas evaluation report scoring Faithfulness, Answer Relevance, and Context Recall.
- **Day 60**: Complete RAG Project: Production Document Q&A Engine
  - *Resource*: RAG Capstone Project Build
  - *Done Condition*: Published GitHub repo with FastAPI backend for RAG system using local/free models.
- **Day 61**: Hugging Face Agents Course Unit 1: ReAct Pattern
  - *Resource*: [Hugging Face Free Agents Course](https://huggingface.co/learn/agents-course/unit0/introduction)
  - *Done Condition*: Python script implementing ReAct (Reasoning + Acting) loop without heavy frameworks.
- **Day 62**: Function Calling & Tool Binding with Ollama / HF
  - *Resource*: [Ollama Tool Calling Documentation](https://ollama.com/)
  - *Done Condition*: Local agent executing python code, weather API, and search tools dynamically.
- **Day 63**: Multi-Agent Orchestration & Shared Memory
  - *Resource*: [LangGraph Architecture Guides](https://langchain-ai.github.io/langgraph/)
  - *Done Condition*: 2-Agent workflow (Researcher + Writer) operating cooperatively on complex topics.
- **Day 64**: LLM Security & Guardrails (OWASP LLM Top 10)
  - *Resource*: [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
  - *Done Condition*: Security audit notebook testing system robustness against 5 prompt injection attacks.
- **Day 65**: Structured Output Generation (Outlines / Instructor)
  - *Resource*: [Outlines Structured Generation Library](https://github.com/dottxt-ai/outlines)
  - *Done Condition*: Python script guaranteeing valid JSON output from open-source LLMs using regex/GFSM.
- **Day 66**: Paper Deep Dive: DeepSeek-R1 & Mixture-of-Experts (MoE)
  - *Resource*: [DeepSeek-R1 Paper ArXiv](https://arxiv.org/abs/2501.12948)
  - *Done Condition*: Technical teardown document analyzing reasoning tokens, GRPO, and MoE routing.
- **Day 67**: KV Cache Mechanics & Speculative Decoding
  - *Resource*: [Hugging Face KV Cache Guide](https://huggingface.co/blog/kv-cache-quantization)
  - *Done Condition*: PyTorch benchmark notebook measuring speedup of KV Cache vs standard autoregression.
- **Day 68**: vLLM High-Throughput Inference Engine
  - *Resource*: [vLLM Documentation](https://docs.vllm.ai/)
  - *Done Condition*: Local benchmark comparing standard Hugging Face generation vs vLLM throughput.
- **Day 69**: Domain-Specific Fine-Tuned Assistant Project
  - *Resource*: [Hugging Face Model Hub Upload Guide](https://huggingface.co/docs/hub/models-uploading)
  - *Done Condition*: Fine-tuned LoRA adapter uploaded to Hugging Face Model Hub with model card.
- **Day 70**: Phase 3 Capstone: LLM Agent & Fine-Tuned Model Deployment
  - *Resource*: [Hugging Face Spaces Deployment](https://huggingface.co/spaces)
  - *Done Condition*: Functional LLM app hosted on Hugging Face Spaces with UI and API endpoints.

---

## 📌 Phase 4: MLOps & Cloud Infrastructure (Weeks 15–18, Days 71–90)
Focus: Made With ML, MLflow tracking, Docker Compose, GitHub Actions CI/CD & live cloud monitoring.

- **Day 71**: Made With ML: Product Design & ML Architecture
  - *Resource*: [Made With ML Course](https://madewithml.com/)
  - *Done Condition*: System architecture diagram for production ML pipeline using Mermaid.js.
- **Day 72**: Data Schema Validation with Great Expectations & Pydantic
  - *Resource*: [Great Expectations Docs](https://greatexpectations.io/)
  - *Done Condition*: Data validation suite script rejecting corrupted CSV/JSON inputs automatically.
- **Day 73**: Feature Store Architecture with Feast
  - *Resource*: [Feast Feature Store Docs](https://docs.feast.dev/)
  - *Done Condition*: Feast repository defining offline and online feature views with Redis/SQLite.
- **Day 74**: Experiment Tracking with MLflow
  - *Resource*: [MLflow Documentation](https://mlflow.org/docs/latest/index.html)
  - *Done Condition*: Local MLflow server tracking hyperparameter sweeps and logging PyTorch artifacts.
- **Day 75**: MLflow Model Registry & Model Lifecycle Stages
  - *Resource*: [MLflow Model Registry Guide](https://mlflow.org/docs/latest/model-registry.html)
  - *Done Condition*: Python script programmatic model transition through Staging -> Production pipeline.
- **Day 76**: Weights & Biases (W&B) System Dashboards
  - *Resource*: [Weights & Biases Free Tier Docs](https://docs.wandb.ai/)
  - *Done Condition*: W&B report dashboard tracking model gradients, GPU utilization, and loss curves.
- **Day 77**: Data & Model Versioning with DVC
  - *Resource*: [DVC Documentation](https://dvc.org/doc)
  - *Done Condition*: DVC-tracked repository configured with local/cloud remote storage for dataset.
- **Day 78**: Multi-Container Docker Compose for ML Systems
  - *Resource*: [Docker Compose Documentation](https://docs.docker.com/compose/)
  - *Done Condition*: Working docker-compose.yml spinning up FastAPI, Redis cache, and Qdrant vector DB.
- **Day 79**: Continuous Integration (CI) for ML with GitHub Actions
  - *Resource*: [GitHub Actions Documentation](https://docs.github.com/en/actions)
  - *Done Condition*: GitHub Action workflow passing pytest, flake8, and black formatting on every push.
- **Day 80**: Automated ML Testing Suite (`pytest`)
  - *Resource*: [Pytest Documentation](https://docs.pytest.org/)
  - *Done Condition*: Comprehensive pytest suite testing neural net tensor shapes and edge cases.
- **Day 81**: Continuous Deployment (CD) & Docker Container Push
  - *Resource*: [GitHub Actions Docker Build & Push Action](https://github.com/marketplace/actions/build-and-push-docker-images)
  - *Done Condition*: CI/CD pipeline automatically building Docker container & pushing to DockerHub.
- **Day 82**: Production FastAPI Inference Service with Batching
  - *Resource*: [FastAPI Documentation](https://fastapi.tiangolo.com/)
  - *Done Condition*: Production-grade FastAPI service handling async concurrent requests with dynamic batching.
- **Day 83**: Free-Tier Cloud Deployment (Render / Railway / HF Spaces)
  - *Resource*: [Render Free Tier Deployment Docs](https://render.com/docs)
  - *Done Condition*: Live deployed ML API endpoint accepting curl/POST requests on cloud.
- **Day 84**: Serverless ML Inference with Modal / AWS Lambda
  - *Resource*: [Modal Documentation](https://modal.com/)
  - *Done Condition*: Deployed serverless function serving PyTorch model inference on demand.
- **Day 85**: Latency Benchmarking & Load Testing (Locust)
  - *Resource*: [Locust Load Testing Framework](https://locust.io/)
  - *Done Condition*: Load testing report analyzing RPS, p95, and p99 latency under 100 concurrent users.
- **Day 86**: Data Drift & Concept Drift Monitoring with Evidently AI
  - *Resource*: [Evidently AI Monitoring Docs](https://docs.evidentlyai.com/)
  - *Done Condition*: Automated html monitoring report detecting covariate shift & data distribution drift.
- **Day 87**: Telemetry & Prometheus Metrics Export
  - *Resource*: [Prometheus Python Client Docs](https://github.com/prometheus/client_python)
  - *Done Condition*: FastAPI endpoint exporting latency, throughput, and error metrics for Prometheus.
- **Day 88**: Automated Retraining Pipeline Triggering
  - *Resource*: [Made With ML MLOps Architecture](https://madewithml.com/)
  - *Done Condition*: Pipeline script automatically triggering retraining job when data drift exceeds threshold.
- **Day 89**: API Security, CORS & Rate Limiting
  - *Resource*: [FastAPI Security Docs](https://fastapi.tiangolo.com/tutorial/security/)
  - *Done Condition*: Secured FastAPI service enforcing rate limits, JWT auth, and CORS headers.
- **Day 90**: Phase 4 Capstone: Monitored Production Pipeline
  - *Resource*: Phase 4 Capstone Submission
  - *Done Condition*: Live production pipeline repo: Git push -> GitHub Action -> Docker -> Cloud -> Drift Alert.

---

## 📌 Phase 5: Proof of Skill & Open Source (Weeks 19–22, Days 91–110)
Focus: Kaggle competition track, active open-source contribution to major ML repos, paper reading log.

- **Day 91**: Kaggle Track 1: Competition Selection & EDA
  - *Resource*: [Kaggle Competitions Dashboard](https://www.kaggle.com/competitions)
  - *Done Condition*: Exploratory Data Analysis notebook published with detailed visualizations.
- **Day 92**: Kaggle Track 1: Leakage-Free CV Pipeline
  - *Resource*: [Kaggle Grandmaster Code Repos](https://www.kaggle.com/code)
  - *Done Condition*: Baseline script logging CV score matching leaderboard public score.
- **Day 93**: Kaggle Track 1: Advanced Feature Engineering
  - *Resource*: [Kaggle Feature Engineering Micro-Course](https://www.kaggle.com/learn/feature-engineering)
  - *Done Condition*: Feature pipeline generating 30+ engineered features with feature importance plot.
- **Day 94**: Kaggle Track 1: Hyperparameter Optimization with Optuna
  - *Resource*: [Optuna Framework Documentation](https://optuna.org/)
  - *Done Condition*: Automated Optuna tuning script optimizing LightGBM, XGBoost, CatBoost & Neural Net.
- **Day 95**: Kaggle Track 1: Model Stacking & Blending Submission
  - *Resource*: [Kaggle Competition Submission Page](https://www.kaggle.com/competitions)
  - *Done Condition*: Blended submission notebook achieving rank in top 15% on public leaderboard.
- **Day 96**: Open Source Part 1: Target Repo Selection & Environment Setup
  - *Resource*: [GitHub Open Source ML Repositories](https://github.com)
  - *Done Condition*: Successfully built repo locally and executed test suite cleanly (pytest).
- **Day 97**: Open Source Part 2: Issue Triage (`good first issue`)
  - *Resource*: Target Repo Issue Tracker
  - *Done Condition*: Selected target open issue or missing feature documentation and commented on issue.
- **Day 98**: Open Source Part 3: Write Failing Unit Test
  - *Resource*: Target Repo Test Suite Guidelines
  - *Done Condition*: Local failing pytest test case reproducing the reported bug exactly.
- **Day 99**: Open Source Part 4: Implement Fix & Local Verification
  - *Resource*: Target Repo Contribution Guidelines
  - *Done Condition*: Clean bug fix / feature code written matching project contributor guidelines.
- **Day 100**: Open Source Part 5: Submit Pull Request (PR)
  - *Resource*: GitHub Pull Request Submissions
  - *Done Condition*: Live open GitHub PR link submitted with clear description and passing CI checks.
- **Day 101**: Weekly Paper Reading 1: LoRA & Parameter-Efficient Tuning
  - *Resource*: [ArXiv AI Paper Archive](https://arxiv.org/list/cs.CL/recent)
  - *Done Condition*: Structured paper summary markdown (Problem, Method, Math, Results, Critique).
- **Day 102**: Weekly Paper Reading 2: Direct Preference Optimization (DPO)
  - *Resource*: [DPO Paper ArXiv](https://arxiv.org/abs/2305.18290)
  - *Done Condition*: Paper summary markdown published to personal GitHub paper log repo.
- **Day 103**: Weekly Paper Reading 3: Retrieval-Augmented Generation
  - *Resource*: [Original RAG Paper ArXiv](https://arxiv.org/abs/2005.11401)
  - *Done Condition*: Paper summary markdown published to personal GitHub paper log repo.
- **Day 104**: Weekly Paper Reading 4: FlashAttention
  - *Resource*: [FlashAttention Paper ArXiv](https://arxiv.org/abs/2205.14135)
  - *Done Condition*: Paper summary markdown published to personal GitHub paper log repo.
- **Day 105**: Benchmark Repo: LLM Fine-Tuning Benchmarks
  - *Resource*: GitHub Project Creation
  - *Done Condition*: Benchmark repository comparing LoRA vs QLoRA memory, speed, and loss curves.
- **Day 106**: Open Source Follow-up & Code Review Iteration
  - *Resource*: Open Pull Request on GitHub
  - *Done Condition*: Updated PR commits based on maintainer feedback until approval/merge.
- **Day 107**: Technical Blog Post 1: Transformer Attention from Scratch
  - *Resource*: [Dev.to Platform](https://dev.to/)
  - *Done Condition*: Published technical article with code snippets and diagrams.
- **Day 108**: Technical Blog Post 2: Production MLOps on Zero Budget
  - *Resource*: [Dev.to Platform](https://dev.to/)
  - *Done Condition*: Published technical blog post shared on LinkedIn.
- **Day 109**: GitHub Profile & Open Source Portfolio Audit
  - *Resource*: GitHub Profile Customization
  - *Done Condition*: Clean GitHub repositories with professional README.md, architecture diagrams, and badges.
- **Day 110**: Phase 5 Capstone: Proof of Skill Portfolio
  - *Resource*: Phase 5 Capstone Submission
  - *Done Condition*: Verified proof-of-work link portfolio ready for interview presentation.

---

## 📌 Phase 6: ML System Design & Interview Prep (Weeks 23–24, Days 111–120)
Focus: Chip Huyen ML System Design framework, mock interview drills, resume/GitHub final alignment pass.

- **Day 111**: ML System Design Framework: Problem Framing & Metrics
  - *Resource*: [Chip Huyen ML System Design Articles](https://huyenchip.com/blog/)
  - *Done Condition*: System Design template document breaking down metrics (Online vs Offline).
- **Day 112**: System Design Problem 1: Real-time Recommendation System
  - *Resource*: [ML System Design Interview Repos](https://github.com/chiphuyen/machine-learning-systems-design)
  - *Done Condition*: Complete architectural design document (Candidate generation, Ranking, Re-ranking).
- **Day 113**: System Design Problem 2: Scalable Vector Search Engine
  - *Resource*: [Chip Huyen System Design Notes](https://huyenchip.com/)
  - *Done Condition*: Architectural diagram outlining index building, quantization (HNSW/IVF-PQ), and latency budget.
- **Day 114**: System Design Problem 3: Production LLM RAG & Agent System
  - *Resource*: [Chip Huyen Building LLM Applications](https://huyenchip.com/2023/04/11/llm-engineering.html)
  - *Done Condition*: System blueprint addressing throughput, fallback models, context caching, and costs.
- **Day 115**: System Design Problem 4: Ad Click-Through Rate (CTR) Prediction
  - *Resource*: [ML System Design Case Studies](https://github.com/chiphuyen/machine-learning-systems-design)
  - *Done Condition*: Written design covering feature pipelines, embeddings storage, and real-time inference.
- **Day 116**: ML Algorithms Coding from Memory Drill
  - *Resource*: Pure Python / NumPy Drills
  - *Done Condition*: Timed 45-min coding test reproducing 3 ML algorithms without imports.
- **Day 117**: AI Engineer Deep Learning & LLM Theory Drill
  - *Resource*: AI Engineering Technical Interview Q&A
  - *Done Condition*: Written answers to 20 top-tier AI Engineer technical interview questions.
- **Day 118**: Resume & LinkedIn Final Polish Pass
  - *Resource*: ATS Resume Optimization Guidelines
  - *Done Condition*: Updated 1-page ATS-optimized resume highlighting recall/accuracy, throughput, and merged PRs.
- **Day 119**: GitHub Profile README Cross-Check & Showcase Audit
  - *Resource*: Personal GitHub Profile README
  - *Done Condition*: Audit report verifying all 6 capstone projects are linked, functional, and documented.
- **Day 120**: Final Mock Interview Simulation & Graduation!
  - *Resource*: AI Engineer Career Graduation
  - *Done Condition*: Complete career-ready portfolio website live + final tracker completion badge!

---

## 📚 Free Reference Shelf

### **Curated Books Shelf**
1. **Dive into Deep Learning (d2l.ai)** — *[FREE / Online HTML]*: PyTorch implementation-first textbook covering math, CNNs, RNNs, Transformers, and optimization.
2. **Deep Learning (Goodfellow, Bengio, Courville)** — *[FREE / Online HTML]*: The foundational textbook for deep learning theory and matrix math fundamentals.
3. **Speech and Language Processing (Jurafsky & Martin)** — *[FREE / Online PDF Draft]*: Comprehensive NLP foundation textbook from Stanford.
4. **Designing Machine Learning Systems (Chip Huyen)** — *[PAID, free blog articles & system design repo available]*: Industry standard for MLOps and production ML system design.
5. **Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow (Aurélien Géron)** — *[PAID, notebook repos FREE on GitHub]*: Code-first reference for practical ML workflows.

### **Curated YouTube Channels**
1. **3Blue1Brown**: Unmatched visual intuition for Linear Algebra, Calculus, and Neural Networks.
2. **StatQuest with Josh Starmer**: Clear, step-by-step visual breakdowns of Machine Learning, Statistics, and Optimizer algorithms.
3. **Andrej Karpathy**: "Neural Networks: Zero to Hero" playlist — essential watching for building autograd, language models, and GPT from scratch.
4. **Yannic Kilcher**: In-depth academic paper teardowns and AI news breakdowns.
5. **Steve Brunton**: Applied math, SVD, Fourier transforms, and dynamical systems for data science.
6. **freeCodeCamp.org**: Long-form project tutorials on MLOps, Docker, and FastAPI.
