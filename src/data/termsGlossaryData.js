export const AI_GLOSSARY_TERMS = [
  {
    id: "backprop",
    term: "Backpropagation & Chain Rule",
    category: "Deep Learning Foundations",
    formula: "\\frac{\\partial L}{\\partial w_i} = \\frac{\\partial L}{\\partial y} \\cdot \\frac{\\partial y}{\\partial z} \\cdot \\frac{\\partial z}{\\partial w_i}",
    definition: "Reverse-mode automatic differentiation algorithm calculating loss gradients with respect to neural network parameters by recursively applying the calculus chain rule backward from output to input layers."
  },
  {
    id: "attention",
    term: "Scaled Dot-Product Attention",
    category: "Transformers & LLMs",
    formula: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V",
    definition: "Core mechanism of Transformer models where Query (Q) and Key (K) dot products compute token similarity weights, scaled by 1/sqrt(d_k) to prevent vanishing softmax gradients, used to aggregate Value (V) representations."
  },
  {
    id: "lora",
    term: "LoRA (Low-Rank Adaptation)",
    category: "LLM Fine-Tuning",
    formula: "W_0 + \\Delta W = W_0 + \\frac{\\alpha}{r} (B \\cdot A), \\quad A \\in \\mathbb{R}^{r \\times k}, B \\in \\mathbb{R}^{d \\times r}",
    definition: "Parameter-efficient fine-tuning technique that freezes pre-trained model weight matrices W_0 and injects trainable rank-decomposition matrices A and B (rank r << min(d,k)), reducing trainable parameters by 99%."
  },
  {
    id: "dpo",
    term: "DPO (Direct Preference Optimization)",
    category: "LLM Alignment",
    formula: "\\mathcal{L}_{DPO} = -\\mathbb{E}\\left[ \\log \\sigma \\left( \\beta \\log \\frac{\\pi_\\theta(y_w|x)}{\\pi_{ref}(y_w|x)} - \\beta \\log \\frac{\\pi_\\theta(y_l|x)}{\\pi_{ref}(y_l|x)} \\right) \\right]",
    definition: "Alignment algorithm for LLMs that directly optimizes model weights on preferred vs dispreferred text pairs using an implicit reward formulation, eliminating the need for a separate PPO reward model."
  },
  {
    id: "cot",
    term: "Chain-of-Thought (CoT) Prompting",
    category: "Prompt Engineering",
    formula: "\\text{Prompt} \\to \\text{Step 1: Reason A} \\to \\text{Step 2: Reason B} \\to \\text{Final Answer}",
    definition: "Prompting strategy that encourages large language models to decompose complex reasoning tasks into intermediate logical steps before producing the final output, dramatically boosting problem-solving accuracy."
  },
  {
    id: "react-pattern",
    term: "ReAct Pattern (Reasoning + Acting)",
    category: "Agentic AI",
    formula: "\\text{Thought} \\to \\text{Action(Tool)} \\to \\text{Observation} \\to \\text{Thought}",
    definition: "Agentic framework that interleaves reasoning thoughts with task execution actions (tool/API calls) and environmental observations, enabling LLMs to dynamically solve multi-step real-world tasks."
  },
  {
    id: "hyde",
    term: "HyDE (Hypothetical Document Embeddings)",
    category: "Advanced RAG Architecture",
    formula: "Query \\to \\text{LLM generates Hypothetical Answer } \\hat{D} \\to \\text{Embed } \\hat{D} \\to \\text{Search DB}",
    definition: "Advanced retrieval technique where an LLM first generates a hypothetical document answering the user query, and that generated document's embedding is used to search the vector database, bridging the semantic gap between short queries and long documents."
  },
  {
    id: "kv-cache",
    term: "KV Cache (Key-Value Cache)",
    category: "LLM Inference Acceleration",
    formula: "O(1) \\text{ per token generation instead of } O(N^2)",
    definition: "Inference optimization technique in autoregressive transformers that stores previously calculated Key and Value tensor matrices in memory, avoiding redundant matrix multiplications for already generated tokens."
  },
  {
    id: "paged-attention",
    term: "PagedAttention (vLLM Engine)",
    category: "LLM Inference Acceleration",
    formula: "\\text{Virtual Memory Paging for GPU Tensors}",
    definition: "Memory management algorithm used in vLLM that partitions KV Cache tensors into non-contiguous physical GPU memory blocks (similar to virtual memory in operating systems), eliminating internal VRAM fragmentation."
  },
  {
    id: "grpo",
    term: "GRPO (Group Relative Policy Optimization)",
    category: "LLM Alignment & DeepSeek",
    formula: "J_{GRPO}(\\theta) = \\mathbb{E} \\left[ \\frac{1}{G} \\sum_{i=1}^G \\min \\left( \\frac{\\pi_\\theta(y_i|x)}{\\pi_{old}(y_i|x)} A_i, \\text{clip}(\\dots) A_i \\right) \\right]",
    definition: "Reinforcement learning algorithm introduced by DeepSeek that evaluates a group of output candidates generated for a single prompt, computing relative advantage rewards without training a separate value function neural network."
  },
  {
    id: "ragas-faithfulness",
    term: "Ragas Faithfulness Metric",
    category: "AI Evaluation & Observability",
    formula: "\\text{Faithfulness} = \\frac{|\\text{Claims in Answer supported by Context}|}{|\\text{Total Claims in Answer}|}",
    definition: "Evaluation metric measuring whether the generated LLM response is grounded strictly in the retrieved context documents, preventing hallucinated or unsupported claims."
  },
  {
    id: "prompt-injection",
    term: "Prompt Injection Attack & Defense",
    category: "AI Security & Guardrails",
    formula: "\\text{User Input} \\text{ attempting to override } \\text{System Instructions}",
    definition: "Vulnerability where malicious user input tricks an LLM into ignoring its system prompt safety guidelines. Defenses include input sanitization, delimiter isolation, and secondary guardrail classifier models."
  },
  {
    id: "flash-attn",
    term: "FlashAttention",
    category: "Transformer Acceleration",
    formula: "O(N) \\text{ Memory Complexity instead of } O(N^2)",
    definition: "IO-aware exact attention algorithm that re-organizes GPU memory access patterns, computing attention in GPU SRAM blocks using tiling and online softmax normalization without materializing the N x N attention matrix."
  },
  {
    id: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    category: "LLM Architecture",
    formula: "P(Y|X) = \\sum_{z \\in Z} P(Y|X, z) P(z|X)",
    definition: "Architecture combining a parametric neural language model with non-parametric external document retrieval (dense vectors / BM25) to provide grounded, up-to-date context in model responses."
  },
  {
    id: "adam",
    term: "Adam Optimizer (Adaptive Moment Estimation)",
    category: "Optimization",
    formula: "m_t = \\beta_1 m_{t-1} + (1-\\beta_1) g_t, \\quad v_t = \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2, \\quad \\hat{\\theta}_{t+1} = \\theta_t - \\frac{\\eta}{\\sqrt{\\hat{v}_t} + \\epsilon} \\hat{m}_t",
    definition: "Optimization algorithm combining First Moment (Momentum) and Second Moment (RMSProp) of gradients with bias correction terms to provide adaptive learning rates per parameter."
  },
  {
    id: "batchnorm",
    term: "Batch Normalization",
    category: "Deep Learning Mechanics",
    formula: "\\hat{x}_i = \\frac{x_i - \\mu_B}{\\sqrt{\\sigma_B^2 + \\epsilon}}, \\quad y_i = \\gamma \\hat{x}_i + \\beta",
    definition: "Layer inserted between neural network operations that normalizes activations across mini-batch samples to mean 0 and variance 1, smoothing the loss landscape and accelerating deep network training."
  },
  {
    id: "rope",
    term: "RoPE (Rotary Position Embedding)",
    category: "Transformers & LLMs",
    formula: "R_{\\Theta, m}^d x_m = \\mathbf{R}_m x_m",
    definition: "Positional encoding method that rotates query and key vector representations in 2D sub-planes by an angle proportional to sequence position m, naturally incorporating relative token distance."
  },
  {
    id: "moe",
    term: "Mixture of Experts (MoE)",
    category: "LLM Architecture",
    formula: "y = \\sum_{i=1}^N G(x)_i E_i(x)",
    definition: "Model architecture replacing dense Feed-Forward layers with multiple specialized 'expert' subnetworks, using a learned gating router to activate only a sparse subset (e.g. 2 of 8 experts) per token."
  },
  {
    id: "svd",
    term: "Singular Value Decomposition (SVD)",
    category: "Math & Linear Algebra",
    formula: "A = U \\Sigma V^T",
    definition: "Matrix factorization decomposing any m x n matrix into orthogonal matrices U and V^T and a diagonal matrix Σ of singular values, used for dimensionality reduction and low-rank matrix approximation."
  },
  {
    id: "hnsw",
    term: "HNSW (Hierarchical Navigable Small World)",
    category: "Vector Search Infrastructure",
    formula: "O(\\log N) \\text{ Search Time Complexity}",
    definition: "Graph-based approximate nearest neighbor (ANN) index structure organizing high-dimensional vector embeddings into multi-layer skip-list graphs for sub-millisecond vector similarity search."
  }
];

export const BOOK_SUMMARIES = [
  {
    id: "d2l-summary",
    title: "Dive into Deep Learning (d2l.ai)",
    authors: "Aston Zhang, Zack C. Lipton, Mu Li, Alex Smola",
    keyChapters: [
      { chapter: "Ch 2-3: Linear Neural Networks", takeaway: "Establishes linear regression and softmax regression as foundational single-layer neural networks derived from maximum likelihood." },
      { chapter: "Ch 4: Multilayer Perceptrons", takeaway: "Covers activation functions (ReLU, Sigmoid, Tanh), capacity, weight decay, and dropout regularization." },
      { chapter: "Ch 6-7: Convolutional Neural Networks", takeaway: "Deep dive into conv operators, padding/stride math, LeNet, AlexNet, VGG, NiN, GoogLeNet, and ResNet." },
      { chapter: "Ch 10-11: Attention & Transformers", takeaway: "Step-by-step mathematical construction of Queries, Keys, Values, Multi-Head Attention, and Transformer encoders/decoders." },
      { chapter: "Ch 12: Optimization Algorithms", takeaway: "Rigorous derivations of SGD, Momentum, AdaGrad, RMSProp, and Adam optimizers." }
    ]
  },
  {
    id: "goodfellow-summary",
    title: "Deep Learning Textbook",
    authors: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    keyChapters: [
      { chapter: "Part I: Applied Math & ML Basics", takeaway: "Comprehensive mathematical foundations in linear algebra, probability, information theory, and numerical computation." },
      { chapter: "Ch 6: Deep Feedforward Networks", takeaway: "Cost function design, output units, cross-entropy, and reverse-mode automatic differentiation chain rule." },
      { chapter: "Ch 8: Optimization for Model Training", takeaway: "Analyzes challenges in neural net optimization: ill-conditioning of Hessian matrix, local minima, saddle points, and vanishing gradients." },
      { chapter: "Part III: Deep Learning Research", takeaway: "Autoencoders, representation learning, generative adversarial networks (GANs), and energy-based models." }
    ]
  },
  {
    id: "chip-huyen-summary",
    title: "Designing Machine Learning Systems",
    authors: "Chip Huyen",
    keyChapters: [
      { chapter: "Ch 3: Data Engineering Fundamentals", takeaway: "Batch vs streaming processing, feature stores, data validation schemas, and point-in-time correctness." },
      { chapter: "Ch 6: Model Development & Offline Evaluation", takeaway: "Baseline models, hyperparameter tuning, leakage-free cross-validation, and multi-task learning." },
      { chapter: "Ch 7: Model Deployment & Serving", takeaway: "Batch prediction vs real-time prediction, model compression (quantization, pruning), and edge vs cloud serving." },
      { chapter: "Ch 8: Data Distribution Shifts & Monitoring", takeaway: "Covariate shift, concept shift, prior probability shift, statistical distance metrics (KS test, PSI), and automated retraining triggers." }
    ]
  },
  {
    id: "jurafsky-summary",
    title: "Speech and Language Processing",
    authors: "Dan Jurafsky & James H. Martin",
    keyChapters: [
      { chapter: "Ch 6: Vector Semantics & Embeddings", takeaway: "TF-IDF, Pointwise Mutual Information (PMI), Word2Vec (Skip-gram & CBOW), and cosine similarity metrics." },
      { chapter: "Ch 9-10: Deep Learning Architectures for NLP", takeaway: "Recurrent Neural Networks (RNNs), LSTMs, GRUs, and sequence-to-sequence encoder-decoder models." },
      { chapter: "Ch 11: Transformers & Large Language Models", takeaway: "Pre-training objectives (Masked LM in BERT vs Autoregression in GPT), fine-tuning strategies, and prompt engineering." }
    ]
  }
];
