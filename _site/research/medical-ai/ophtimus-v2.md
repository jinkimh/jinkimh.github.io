<section id="ophtimus" class="section" style="padding-top: 2rem;">
  <h2>Ophtimus: Ophthalmology-specific LLM</h2>

  <p class="section-text">
    <a href="https://github.com/jinkimh/Ophtimus-Ophthalmology-LLM" target="_blank" class="github-badge-link">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
    </a>
  </p>

  <div class="badges-container">
    <img src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge" alt="Python">
    <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge" alt="PyTorch">
    <img src="https://img.shields.io/badge/Transformers-EF5350?style=for-the-badge" alt="Transformers">
    <img src="https://img.shields.io/badge/LangChain-0E8388?style=for-the-badge" alt="LangChain">
    <img src="https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge" alt="Streamlit">
    <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge" alt="FastAPI">
  </div>

  <p class="section-text">
    🤗 <a href="https://huggingface.co/collections/BaekSeungJu/ophtimus-series-67d859fedb756527d680ce42" target="_blank"><strong>Models and Datasets</strong></a> &nbsp;|&nbsp; 📕 <a href="https://openreview.net/forum?id=dIJPlNKhgv" target="_blank"><strong>AAAI 2025 workshop Paper</strong></a>
  </p>

  <h3>Introduction</h3>
  <p class="section-text">
    Ophtimus is an open-source <strong>large language model (LLM)</strong> specialized in ophthalmology, built with <strong>8 billion parameters</strong> based on the LLaMA architecture. It was trained on carefully curated ophthalmology-specific data, including medical papers, textbooks, and research reports. Through filtering, summarization, and preprocessing, only the most relevant and high-quality information was retained.
  </p>
  <p class="section-text">
    Designed to be both <strong>lightweight</strong> and <strong>high-performing</strong>, Ophtimus is suitable for real-world applications such as <strong>clinical decision support</strong>, <strong>medical education</strong>, and <strong>patient communication</strong>. The model and its training pipeline are fully open-sourced, providing a practical reference for developing similar domain-specific LLMs in other areas of medicine.
  </p>

  <p class="section-text">
    <strong>GitHub Repository:</strong> <a href="https://github.com/jinkimh/Ophtimus-Ophthalmology-LLM" target="_blank">github.com/jinkimh/Ophtimus-Ophthalmology-LLM</a>
  </p>

  <!-- 대표 이미지 -->
  <div class="image-wrapper">
    <img src="{{ '/images/research/ophtimus/Ophtimus-Overall-Architecture.png' | relative_url }}" alt="Ophtimus Overall Architecture" class="content-image" style="max-width:900px;" />
  </div>

  <hr class="section-divider" />

  <!-- Dataset Details -->
  <h3>Dataset Details</h3>

  <div class="highlight-box">
    <p class="section-text">
      <strong>Note:</strong> All datasets were either newly constructed or adapted for this project. Pre-training datasets were curated from open-source ophthalmology materials, while instruction-tuning and evaluation datasets were built by extracting only ophthalmology-relevant samples from broader medical corpora. All data underwent preprocessing steps including deduplication, language filtering (English only), and removal of any personally identifiable information (PII).
    </p>
  </div>

  <div class="table-wrapper">
    <table class="degree-table">
      <thead>
        <tr>
          <th>Dataset name</th>
          <th>Source</th>
          <th>Size</th>
          <th>Purpose</th>
          <th>Key Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ophthalmology-pubmed-corpus <a href="https://huggingface.co/datasets/BaekSeungJu/Ophthalmology-PubMed-Corpus" target="_blank">[Link]</a></td>
          <td>Ophthalmology paper</td>
          <td>18.4M Tokens</td>
          <td>Pre-Training</td>
          <td>
            • Map-reduce method summary<br />
            • Broad ophthalmic keywords
          </td>
        </tr>
        <tr>
          <td>Ophthalmology-textbook-corpus <a href="https://huggingface.co/datasets/BaekSeungJu/Ophthalmology-Textbook-Corpus" target="_blank">[Link]</a></td>
          <td>Ophthalmology textbook</td>
          <td>4M Tokens</td>
          <td>Pre-Training</td>
          <td>
            • Trusted medical sources<br />
            • Rich in diagnostic cases
          </td>
        </tr>
        <tr>
          <td>Ophthalmology MCQA Inst dataset <a href="https://huggingface.co/datasets/BaekSeungJu/Ophthalmology-MCQA-v3" target="_blank">[Link]</a></td>
          <td>Ophthalmology Docs</td>
          <td>51.7k QAs</td>
          <td>Inst-Tuning</td>
          <td>
            • Diverse multiple-choice formats<br />
            • Reasoning included<br />
            • Variety of ophthalmic topics
          </td>
        </tr>
        <tr>
          <td>Ophthalmology EQA Inst dataset <a href="https://huggingface.co/datasets/BaekSeungJu/Ophthalmology-EQA-v3" target="_blank">[Link]</a></td>
          <td>Ophthalmology Docs</td>
          <td>49.3k QAs</td>
          <td>Inst-Tuning</td>
          <td>
            • Variety of ophthalmic topics
          </td>
        </tr>
        <tr>
          <td>Ophtimus-Eval-Dataset <a href="https://huggingface.co/datasets/BaekSeungJu/OphtimusEval-Dataset" target="_blank">[Link]</a></td>
          <td>Medical platform data</td>
          <td>2,153 QAs</td>
          <td>Evaluation</td>
          <td>
            • expert-verified data<br />
            • MCQA dataset
          </td>
        </tr>
        <tr>
          <td>PubMedQA-ophthal-Dataset <a href="https://huggingface.co/datasets/BaekSeungJu/PubMedQA-Ophthal-Dataset" target="_blank">[Link]</a></td>
          <td>PubMedQA</td>
          <td>297 QAs</td>
          <td>Evaluation</td>
          <td>
            • Ophthalmology domain filtered<br />
            • True/False MCQA dataset
          </td>
        </tr>
        <tr>
          <td>MedMCQA-Ophthal-Dataset <a href="https://huggingface.co/datasets/BaekSeungJu/MedMCQA-Ophthal-Dataset" target="_blank">[Link]</a></td>
          <td>MedMCQA</td>
          <td>6,932 QAs</td>
          <td>Evaluation</td>
          <td>
            • Ophthalmology domain filtered<br />
            • MCQA dataset
          </td>
        </tr>
        <tr>
          <td>EQAEval-Dataset <a href="https://huggingface.co/datasets/BaekSeungJu/EQAEval-Ophthal-Dataset" target="_blank">[Link]</a></td>
          <td>MedQuAD, Others</td>
          <td>1,389 QAs</td>
          <td>Evaluation</td>
          <td>
            • Diverse open-source datasets<br />
            • Ophthalmology domain filtered<br />
            • Essay QA
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr class="section-divider" />

  <!-- Model Details -->
  <h3>Model Details</h3>

  <div class="highlight-box">
    <p class="section-text">
      <strong>Note:</strong> The "pre-training" and "fine-tuning" columns in the table refer to the training performed in this project. The base models had already undergone pre-training and/or fine-tuning prior to this project, and we applied transfer learning using those models.
    </p>
  </div>

  <div class="table-wrapper">
    <table class="degree-table">
      <thead>
        <tr>
          <th>Model name</th>
          <th>Base model</th>
          <th>Parameters</th>
          <th>Pre-training</th>
          <th>Instruction-tuning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ophtimus-Base <a href="https://huggingface.co/BaekSeungJu/Ophtimus-8B-Base" target="_blank">[Link]</a></td>
          <td>Llama-3.1-8B</td>
          <td>8B</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Ophtimus-Llama-1B <a href="https://huggingface.co/BaekSeungJu/Ophtimus-1B-Instruct" target="_blank">[Link]</a></td>
          <td>Llama-3.2-1B-Instruct</td>
          <td>1B</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Ophtimus-Llama-3B <a href="https://huggingface.co/BaekSeungJu/Ophtimus-3B-Instruct" target="_blank">[Link]</a></td>
          <td>Llama-3.2-3B-Instruct</td>
          <td>3B</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Ophtimus-Llama-8B <a href="https://huggingface.co/BaekSeungJu/Ophtimus-8B-Instruct" target="_blank">[Link]</a></td>
          <td>Llama-3.1-8B-Instruct</td>
          <td>8B</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Ophtimus-Instruct-8B <a href="https://huggingface.co/your-link-here" target="_blank">[Link]</a></td>
          <td>Ophtimus-Base</td>
          <td>8B</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr class="section-divider" />

  <!-- Performance -->
  <h3>Performance</h3>

  <div class="highlight-box">
    <p class="section-text">
      <strong>Note:</strong> Multi-Choice QA: Ophtimus-Eval, MedMCQA, PubMedQA | Essay QA: MedQuAD, Medical Flashcards, Medical Wikidoc<br />
      Ophtimus-Eval is a proprietary dataset collected from a medical platform. The others are established medical benchmark datasets, from which only ophthalmology-related QA pairs were extracted for evaluation.
    </p>
  </div>

  <div class="table-wrapper">
    <table class="degree-table">
      <thead>
        <tr>
          <th rowspan="2">Model</th>
          <th colspan="3">Multi-Choice Question</th>
          <th colspan="4">Essay Question</th>
        </tr>
        <tr>
          <th>Ophtimus Eval</th>
          <th>MedMCQA (Ophth)</th>
          <th>PubmedQA (Ophth)</th>
          <th>RougeL</th>
          <th>BLEU</th>
          <th>METEOR</th>
          <th>SemScore</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>OpenAI GPT-4o</strong></td>
          <td><strong>71.95%</strong></td>
          <td><strong>81.95%</strong></td>
          <td><strong>89.90%</strong></td>
          <td>0.193</td>
          <td>0.082</td>
          <td><strong>0.341</strong></td>
          <td><strong>0.761</strong></td>
        </tr>
        <tr>
          <td>Llama-3-8B-Instrct</td>
          <td>48.60%</td>
          <td>74.02%</td>
          <td>63.97%</td>
          <td>0.193</td>
          <td>0.064</td>
          <td>0.244</td>
          <td>0.684</td>
        </tr>
        <tr>
          <td>Llama-3.1-8B-Instrct</td>
          <td>39.78%</td>
          <td>57.96%</td>
          <td>83.84%</td>
          <td>0.177</td>
          <td>0.054</td>
          <td>0.215</td>
          <td>0.641</td>
        </tr>
        <tr>
          <td>Eye-Llama</td>
          <td>32.56%</td>
          <td>59.43%</td>
          <td>66.11%</td>
          <td>0.183</td>
          <td>0.062</td>
          <td>0.211</td>
          <td>0.686</td>
        </tr>
        <tr>
          <td>PMC-Llama-13B</td>
          <td>48.28%</td>
          <td>63.45%</td>
          <td>72.48%</td>
          <td>0.223</td>
          <td>0.082</td>
          <td>0.288</td>
          <td>0.714</td>
        </tr>
        <tr>
          <td>Ophtimus-Llama-1B</td>
          <td>41.45%</td>
          <td>45.74%</td>
          <td>61.95%</td>
          <td>0.219</td>
          <td>0.076</td>
          <td>0.217</td>
          <td>0.711</td>
        </tr>
        <tr>
          <td>Ophtimus-Llama-3B</td>
          <td>52.70%</td>
          <td>62.10%</td>
          <td>69.36%</td>
          <td>0.224</td>
          <td>0.077</td>
          <td>0.225</td>
          <td>0.726</td>
        </tr>
        <tr>
          <td>Ophtimus-Llama-8B</td>
          <td>60.78%</td>
          <td>68.25%</td>
          <td>69.70%</td>
          <td><strong>0.226</strong></td>
          <td><strong>0.083</strong></td>
          <td>0.230</td>
          <td>0.733</td>
        </tr>
        <tr>
          <td>Ophtimus-Instruct-8B</td>
          <td>63.85%</td>
          <td>71.51%</td>
          <td>72.73%</td>
          <td>0.222</td>
          <td>0.079</td>
          <td>0.224</td>
          <td><strong>0.735</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <hr class="section-divider" />

  <!-- Quickstart -->
  <h3>Quickstart</h3>

  <h4>Install Dependencies</h4>
  <pre><code>cd Ophtimus-Ophthalmology-LLM
pip install -r requirements.txt</code></pre>

  <h4>Ophtimus Inference</h4>
  <pre><code>import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# model_name example : BaekSeungJu/Ophtimus-Instruct-8B or Ophtimus-Llama-1B or Ophtimus-Llama-3B or Ophtimus-Llama-8B
model_name = "BaekSeungJu/Ophtimus-Instruct-8B"

model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype=torch.bfloat16,
    trust_remote_code=True,
).to("cuda")

tokenizer = AutoTokenizer.from_pretrained(model_name, padding_side="left")
tokenizer.pad_token = tokenizer.eos_token

system_instruction = (
    "You are an expert ophthalmologist. Please provide accurate and "
    "medically sound answers to the user's ophthalmology-related question."
)

# Enter your questions in the list
questions = [
    "Please describe the symptoms and treatment of epiretinal membrane.",
    "What's good for eyes?"
]

prompts = []
for question in questions:
    row_json = [
        {"role": "system", "content": system_instruction},
        {"role": "user", "content": question}
    ]
    prompt = tokenizer.apply_chat_template(row_json, add_generation_prompt=True, tokenize=False)
    prompts.append(prompt)

input_ids = tokenizer(
    prompts,
    padding=True,
    return_tensors="pt",
)["input_ids"].to("cuda")

model.eval()
with torch.no_grad():
    outputs = model.generate(
        input_ids,
        max_new_tokens=1024,
        do_sample=False,
    )

decoded = tokenizer.batch_decode(outputs, skip_special_tokens=False)
for i, text in enumerate(decoded):
    print(f"------------------------\nAnswer for question {i+1}:\n{text}")</code></pre>

  <p class="section-text" style="margin-top: 1.5rem;">
    For more details, visit the <a href="https://github.com/jinkimh/Ophtimus-Ophthalmology-LLM" target="_blank">GitHub repository</a>.
  </p>
</section>
