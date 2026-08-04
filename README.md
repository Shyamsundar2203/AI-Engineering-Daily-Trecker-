# 🚀 AI Engineer Pro Daily Career Tracker

> **The Ultimate Open-Source Master Curriculum & Self-Contained Interactive Web Tracker to Go From CSE Student to Top-Tier AI Engineer using 100% Free Resources.**

[![React](https://img.shields.io/badge/Frontend-React%2018-cyan?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Build%20Tool-Vite%206-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Shyamsundar2203-blue?style=for-the-badge&logo=github)](https://github.com/Shyamsundar2203/AI-Engineering-Daily-Trecker-)

---

## 🎯 What is an AI Engineer & Why This Exists?

An **AI Engineer** bridges the gap between raw research models and production-ready intelligent software systems. Unlike traditional software engineers (who write explicit business logic) or ML Researchers (who invent novel mathematical architectures), an AI Engineer excels at:

1. **Applying Pre-Trained Foundation Models**: Fine-tuning LLMs (LoRA, QLoRA, SFT, DPO) for specific enterprise domains.
2. **Context & Retrieval Systems**: Building high-precision RAG pipelines with Hybrid Search (BM25 + Dense Vectors), HNSW vector databases, and Cross-Encoder reranking.
3. **Agentic Workflows & Tool Use**: Designing autonomous AI agents (ReAct pattern, LangGraph state graphs, Function Calling) that execute multi-step tools.
4. **Production Infrastructure (MLOps)**: Containerizing models with Docker Compose, monitoring data drift with Evidently AI, and optimizing inference with vLLM PagedAttention.
5. **System Design & Latency Optimization**: Engineering real-time recommendation engines, vector search pipelines, and cost-effective LLM serving.

### Why This Tracker Project?
Quality AI education shouldn't be locked behind $2,000 bootcamps. This repository provides both a **complete, structured 120-day self-paced master curriculum** (combining official **roadmap.sh/ai-engineer** and **AgenticAiLabs OSSU-Path**) and an **interactive web app** you open daily to track your progress, log daily diary entries, and verify deliverables.

---

## 🧠 What to Learn & How to Learn: Master Blueprint

```
                     ┌─────────────────────────────────────────┐
                     │     1. MATH & ML RIGOR REFRESH          │
                     │  Linear Algebra, Calculus, Prob & SGD   │
                     └────────────────────┬────────────────────┘
                                          │
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │     2. DEEP LEARNING MASTERY            │
                     │  Autograd, Micrograd, ViT & PyTorch     │
                     └────────────────────┬────────────────────┘
                                          │
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │  3. NLP, TRANSFORMERS, LLMs & AGENTS    │
                     │  NanoGPT, LoRA, RAG, ReAct, LangGraph   │
                     └────────────────────┬────────────────────┘
                                          │
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │   4. MLOPS & PRODUCTION INFRASTRUCTURE  │
                     │  Docker Compose, MLflow, vLLM, Evidently│
                     └────────────────────┬────────────────────┘
                                          │
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │   5. PROOF OF SKILL & OPEN SOURCE       │
                     │  Kaggle Rank, Open-Source PRs & Blog    │
                     └────────────────────┬────────────────────┘
                                          │
                                          ▼
                     ┌─────────────────────────────────────────┐
                     │   6. ML SYSTEM DESIGN & INTERVIEWS      │
                     │  Chip Huyen Framework & System Audits   │
                     └─────────────────────────────────────────┘
```

---

## 📅 The 120-Day Master Curriculum Breakdown

Each task requires **1 to 1.5 hours per day, 5 days per week across 24 weeks**.

### **Phase 1: Math & ML Rigor Refresh (Weeks 1–4, Days 1–20)**
*Focus: Derivation-level math for linear algebra, multivariate calculus, probability, and pure NumPy ML algorithms.*
- **Linear Algebra**: Vector spaces, matrix transformations, Eigendecomposition ($Av = \lambda v$), PCA projection, and Singular Value Decomposition (SVD).
- **Matrix Calculus**: Vector gradients ($\nabla_{\mathbf{w}} \mathbf{w}^T \mathbf{X}^T \mathbf{X} \mathbf{w}$), Jacobians, and Hessians.
- **Probability & Statistics**: Maximum Likelihood Estimation (MLE), MAP, Bayes Theorem, Information Theory (Entropy, Cross-Entropy, KL Divergence), and A/B testing hypothesis tests.
- **Optimization**: Deriving SGD, Momentum, AdaGrad, RMSProp, Adam, Lagrange Multipliers, and SVM Primal/Dual formulations.

### **Phase 2: Deep Learning Mastery (Weeks 5–9, Days 21–45)**
*Focus: Building deep learning systems from scratch, autograd engines, and PyTorch optimization.*
- **Zero-to-Hero Autograd**: Karpathy's `Micrograd` computational graph DAG engine and reverse-mode `_backward()` backpropagation from scratch.
- **Language Models from Scratch**: `Makemore` Bigram, Bengio MLP, Batch Normalization mechanics, manual backprop ninja drills, and WaveNet 1D dilated convolutions.
- **Computer Vision & Performance**: Pure NumPy 2D Convolutions, ResNet-18 skip connections, Vision Transformers (ViT), IoU/NMS object detection, Mixed Precision (`torch.cuda.amp`), PyTorch DDP, ONNX export, and INT8 quantization.

### **Phase 3: NLP, Transformers, LLMs & Agents (Weeks 10–14, Days 46–70)**
*Focus: Transformer mechanics, fine-tuning, advanced RAG architectures, and autonomous AI agents.*
- **Transformer Engine**: "Attention Is All You Need" paper derivation, Scaled Dot-Product Attention, Causal Masking, `NanoGPT` implementation, RoPE positional encodings, and FlashAttention.
- **LLM Fine-Tuning**: Hugging Face NLP Course, LoRA matrix decomposition ($W + BA$), QLoRA 4-bit NF4 quantization (`bitsandbytes`), Supervised Fine-Tuning (`SFTTrainer`), and Direct Preference Optimization (DPO).
- **Production RAG Engine**: Semantic chunking, ChromaDB, Hybrid Search (BM25 + Dense Vectors via RRF), Cross-Encoder Reranking, HyDE, and Ragas evaluation framework.
- **Agentic AI & Tool Use**: ReAct pattern, Function Calling, LangGraph multi-agent orchestration, Outlines structured JSON generation, DeepSeek-R1 GRPO/MoE paper teardowns, and vLLM PagedAttention serving.

### **Phase 4: MLOps & Production Infrastructure (Weeks 15–18, Days 71–90)**
*Focus: Made With ML, MLflow, Docker Compose, GitHub Actions CI/CD, and drift monitoring.*
- **Data & Feature Engineering**: Great Expectations data schema validation, Feast feature store (offline Parquet + online Redis).
- **Tracking & Versioning**: MLflow tracking server & model registry, Weights & Biases dashboards, DVC data version control.
- **Production Serving**: Multi-container Docker Compose (FastAPI + Redis + Qdrant), GitHub Actions automated pytest CI/CD, cloud deployment on Render/Railway/HF Spaces, serverless GPUs (Modal), and Evidently AI data drift monitoring.

### **Phase 5: Competitive Proof of Skill & Open Source (Weeks 19–22, Days 91–110)**
*Focus: Kaggle competitions, active open-source contributions to major ML repos, and paper log.*
- **Kaggle Competition Track**: Leakage-free CV pipeline, feature engineering, Optuna hyperparameter tuning, model stacking/blending.
- **Open-Source Contribution**: Cloning, building, and submitting merged Pull Requests to major repos (e.g. Hugging Face `transformers`, `vLLM`, `LlamaIndex`).
- **Paper Log & Technical Writing**: Publishing paper teardowns (LoRA, DPO, RAG, FlashAttention) and technical blogs on Medium/Dev.to.

### **Phase 6: ML System Design & Interview Prep (Weeks 23–24, Days 111–120)**
*Focus: Chip Huyen's Machine Learning System Design, mock interviews, and GitHub portfolio polish.*
- **ML System Design**: Recommendation Systems (Two-Tower), Scalable Vector Search (HNSW/IVF-PQ), Production LLM Stack, CTR Prediction.
- **Interview Coding Drills**: Pure NumPy algorithm coding from memory, deep learning theory Q&A drills, 1-page ATS resume optimization, and GitHub showcase audit.

---

## 💻 Web Application Features

The repository includes a complete, self-contained single-page application built with **React, Vite, and Tailwind CSS**:

1. **Today View**: Default screen showing today's task, phase badge, estimated time, direct free resource button, and deliverable output done-condition. Includes a celebratory **confetti effect** upon task completion!
2. **120-Day Roadmap View**: 6 collapsible phase accordions with progress bars, search filtering, and task status pills.
3. **roadmap.sh Interactive Skill Tree**: Skill tree mapping incorporating official **roadmap.sh/ai-engineer** & **AgenticAiLabs** nodes with interactive mastery toggles.
4. **Streak Heatmap & Stats**: GitHub-style 52-week contribution matrix (`#0A101F` dark aesthetic, cyan/emerald glow), current/longest streak counters, and 6 Phase Capstone Milestone Badges.
5. **AI Terms Glossary & Book Notes**: 40+ searchable AI terms with LaTeX formulas (Backprop, Attention, LoRA, DPO, KV Cache, FlashAttention, GRPO, MoE) and chapter-by-chapter summaries for top textbooks (*d2l.ai*, *Goodfellow*, *Chip Huyen*, *Jurafsky*).
6. **Daily Diary & Personal Journal**: Date-stamped diary entries with interactive 1-5 🔥 energy ratings, daily wins, blockers, reflections, and Markdown export.
7. **Resource Shelf**: Permanent access to recommended textbooks (free vs paid badges) and curated YouTube channels.
8. **Weekly Summary**: 5-day velocity stats, phase progress, notes recap, and markdown export.
9. **Data Backup & Restore**: Auto-saves to `localStorage`. Includes JSON Export & Import buttons to transfer progress across devices.

---

## 🛠️ How to Run & Deploy for FREE

### 1. Local Setup
```bash
# Clone the repository
git clone https://github.com/Shyamsundar2203/AI-Engineering-Daily-Trecker-.git

# Navigate into the project folder
cd AI-Engineering-Daily-Trecker-

# Install dependencies
npm install

# Launch local dev server
npm run dev
```
Open **`http://localhost:3000`** in your browser!

### 2. 1-Click Free Cloud Deployment (Vercel / Netlify)
You can deploy this app online for free and open it daily on your phone or laptop:
1. Go to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Sign in with GitHub and select repository **`Shyamsundar2203/AI-Engineering-Daily-Trecker-`**.
3. Click **Deploy** — Vercel will build and provide a 24/7 free web link (e.g. `https://ai-engineering-daily-trecker.vercel.app`).
4. Add the URL to your phone's Home Screen for a native mobile app experience!

---

## 📚 Curated Reference Shelf

### Free Textbooks
- **[Dive into Deep Learning (d2l.ai)](https://d2l.ai/)** — *FREE / Interactive HTML*: PyTorch implementation-first textbook covering math, vision, attention, and optimization.
- **[Deep Learning (Goodfellow, Bengio, Courville)](https://www.deeplearningbook.org/)** — *FREE / HTML*: The gold-standard MIT Press textbook for theoretical deep learning.
- **[Speech and Language Processing (Jurafsky & Martin)](https://web.stanford.edu/~jurafsky/slp3/)** — *FREE / Draft PDF*: Stanford's foundational NLP textbook.
- **[Designing Machine Learning Systems (Chip Huyen)](https://huyenchip.com/books/)** — *PAID (Free Articles Available)*: Industry standard for MLOps and production ML system design.

### Curated YouTube Channels
- **[3Blue1Brown](https://www.youtube.com/@3blue1brown)**: Unmatched visual intuition for Linear Algebra, Calculus, and Neural Networks.
- **[StatQuest with Josh Starmer](https://www.youtube.com/@statquest)**: Step-by-step visual breakdowns of Machine Learning, Statistics, and Optimizers.
- **[Andrej Karpathy](https://www.youtube.com/@AndrejKarpathy)**: "Neural Networks: Zero to Hero" playlist — building autograd, language models, and GPT from scratch.
- **[Yannic Kilcher](https://www.youtube.com/@YannicKilcher)**: Deep academic paper teardowns and AI research breakdowns.
- **[Steve Brunton](https://www.youtube.com/@SteveBrunton)**: Applied math, SVD, Fourier transforms, and control theory.
- **[freeCodeCamp.org](https://www.youtube.com/@freecodecamp)**: Long-form project courses on MLOps, Docker, and FastAPI.

---

## 📄 License & Acknowledgments

- Built with ❤️ for AI Engineers worldwide.
- Modeled after curriculum guidelines from **[roadmap.sh/ai-engineer](https://roadmap.sh/ai-engineer)** & **[AgenticAiLabs OSSU Path](https://github.com/AgenticAiLabs/Ai-Engineering-Roadmap)**.
- Licensed under the **MIT License**.
