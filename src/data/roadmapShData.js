export const ROADMAP_SOURCES = [
  {
    id: "roadmap-sh",
    name: "roadmap.sh / ai-engineer",
    url: "https://roadmap.sh/ai-engineer",
    badge: "Official roadmap.sh",
    description: "Industry-standard developer path for applying models, RAG, Agents, and LLM engineering."
  },
  {
    id: "agentic-labs",
    name: "AgenticAiLabs / Ai-Engineering-Roadmap",
    url: "https://github.com/AgenticAiLabs/Ai-Engineering-Roadmap",
    badge: "AgenticAiLabs OSSU-Path",
    description: "Open-source computer science curriculum for AI Engineering from zero to autonomous agents."
  }
];

export const ROADMAP_SH_NODES = [
  {
    id: "math-foundations",
    category: "1. Mathematics & Fundamentals for AI",
    color: "from-cyan-500 to-blue-500",
    source: "both",
    topics: [
      { id: "la", name: "Linear Algebra & Matrices", desc: "Vector spaces, dot product similarity, matrix multiplication, eigendecomposition, SVD, PCA." },
      { id: "calc", name: "Multivariate Calculus & Gradients", desc: "Partial derivatives, Jacobians, Hessians, matrix calculus, chain rule." },
      { id: "prob", name: "Probability & Statistics", desc: "Bayes theorem, MLE, MAP, Gaussian/Bernoulli/Dirichlet distributions, p-values, A/B testing." },
      { id: "opt", name: "Optimization Algorithms", desc: "Convex optimization, SGD, Momentum, AdaGrad, RMSProp, Adam, Lagrange multipliers." }
    ]
  },
  {
    id: "ml-dl-core",
    category: "2. Classical ML & Deep Learning Core",
    color: "from-blue-500 to-indigo-500",
    source: "agentic-labs",
    topics: [
      { id: "sup", name: "Supervised & Unsupervised ML", desc: "Linear/Logistic regression, SVM, Decision Trees, XGBoost, K-Means clustering." },
      { id: "autograd", name: "Autograd & Computational Graphs", desc: "Reverse-mode automatic differentiation, Micrograd, DAG computational graphs." },
      { id: "nn-mechanics", name: "Neural Network Mechanics", desc: "Bengio MLP, loss functions, activation deadness, Kaiming/Xavier init, Batch/LayerNorm." },
      { id: "cnn-cv", name: "Convolutional Networks & Computer Vision", desc: "Convolutions, ResNet skip connections, MobileNet, Vision Transformers (ViT), IoU/NMS." }
    ]
  },
  {
    id: "llm-prompting",
    category: "3. LLMs & Prompt Engineering Mastery",
    color: "from-purple-500 to-violet-500",
    source: "roadmap-sh",
    topics: [
      { id: "prompt-tech", name: "Prompting Techniques", desc: "System Instructions, Zero-shot, Few-shot, Chain-of-Thought (CoT), ReAct prompting." },
      { id: "struct-output", name: "Structured Outputs & JSON Schema", desc: "Guaranteed JSON generation using Pydantic, Outlines, Instructor, and regex GFSM." },
      { id: "tokenization", name: "Tokenization & BPE Mechanics", desc: "Byte-Pair Encoding (BPE), tiktoken, minbpe, vocabulary compression ratios." }
    ]
  },
  {
    id: "rag-vector-db",
    category: "4. RAG Architecture & Vector Databases",
    color: "from-emerald-500 to-teal-500",
    source: "both",
    topics: [
      { id: "chunk-embed", name: "Semantic Chunking & Embeddings", desc: "Document ingestion, sentence splitting, dense vector embeddings (OpenAI, Hugging Face)." },
      { id: "vector-dbs", name: "Vector Indexing & Databases", desc: "HNSW graphs, IVF-PQ quantization, Qdrant, ChromaDB, PGVector, Pinecone." },
      { id: "hybrid-search", name: "Hybrid Search & Reranking", desc: "BM25 sparse search + Dense vector search, Reciprocal Rank Fusion (RRF), Cross-Encoder Reranking." },
      { id: "advanced-rag", name: "Advanced RAG (HyDE & Self-RAG)", desc: "Hypothetical Document Embeddings (HyDE), Corrective RAG (CRAG), context compression." }
    ]
  },
  {
    id: "agents-workflows",
    category: "5. Agentic AI & Autonomous Workflows",
    color: "from-teal-500 to-cyan-600",
    source: "both",
    topics: [
      { id: "tool-calling", name: "Function Calling & Tool Binding", desc: "Binding APIs, calculators, and web search to open LLMs via structured tool schemas." },
      { id: "agent-react", name: "ReAct Pattern Execution", desc: "Reasoning + Acting execution loop, memory management, short-term vs long-term storage." },
      { id: "multi-agent", name: "Multi-Agent Orchestration", desc: "LangGraph state graphs, CrewAI swarms, supervisor-worker multi-agent workflows." },
      { id: "agent-eval", name: "Agent Planning & Reflection", desc: "Self-reflection loops, error correction, tool use guardrails, autonomous task breakdown." }
    ]
  },
  {
    id: "finetuning-open-llm",
    category: "6. Fine-Tuning & Open-Source Models",
    color: "from-amber-500 to-orange-500",
    source: "both",
    topics: [
      { id: "peft-lora", name: "PEFT & LoRA Adaptation", desc: "Low-Rank Adaptation (W + BA), QLoRA 4-bit NF4 quantization, bitsandbytes." },
      { id: "sft-dpo", name: "SFT & Direct Preference Optimization", desc: "Instruction dataset formatting, ChatML, SFTTrainer, DPO loss formulation." },
      { id: "moe-architecture", name: "Sparse MoE & DeepSeek Architecture", desc: "Mixture of Experts routing, GRPO reinforcement learning, reasoning token teardowns." }
    ]
  },
  {
    id: "eval-security",
    category: "7. AI Evaluation, Observability & Security",
    color: "from-rose-500 to-pink-500",
    source: "roadmap-sh",
    topics: [
      { id: "ragas-eval", name: "RAG & LLM Evaluation (Ragas)", desc: "Scoring Faithfulness, Answer Relevance, Context Precision & Recall." },
      { id: "guardrails-sec", name: "AI Security & Guardrails", desc: "OWASP Top 10 for LLMs, prompt injection defense, NeMo Guardrails, input sanitization." },
      { id: "tracing-telemetry", name: "Tracing & Observability", desc: "LangSmith, Phoenix Arize, Prometheus metrics export for LLM calls." }
    ]
  },
  {
    id: "mlops-prod-scale",
    category: "8. MLOps & Production Infrastructure",
    color: "from-purple-600 to-indigo-600",
    source: "both",
    topics: [
      { id: "tracking-registry", name: "Experiment Tracking & Registry", desc: "MLflow model registry, Weights & Biases dashboards, DVC data versioning." },
      { id: "docker-cicd", name: "Containerization & CI/CD", desc: "Multi-container Docker Compose (FastAPI + Redis + Qdrant), GitHub Actions CI/CD." },
      { id: "llm-inference-engine", name: "High-Throughput Serving (vLLM)", desc: "vLLM engine, PagedAttention, KV cache quantization, serverless GPUs (Modal/RunPod)." },
      { id: "drift-monitoring", name: "Data Drift & Monitoring", desc: "Evidently AI covariate shift detection, automated retraining pipelines." }
    ]
  }
];
