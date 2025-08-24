📄 Documentação da API – Identificação de Medicamentos
📌 Visão Geral

Esta API foi desenvolvida em Python para identificar medicamentos a partir de imagens de embalagens, bulas ou rótulos, utilizando visão computacional e processamento de linguagem natural.
O sistema combina duas tecnologias principais:

Pytesseract (OCR) → Faz a detecção de texto localmente.

Google Cloud Vision API → Usada como fallback para maior precisão.

Após extrair o texto, a API processa o conteúdo, remove palavras irrelevantes e compara com uma base interna de medicamentos, retornando o nome mais provável do remédio encontrado.

⚙️ Requisitos do Sistema
Linguagem e Frameworks

Python 3.10+

Flask (API REST)

Pytesseract (OCR)

Google Cloud Vision

OpenCV

Pillow

NLTK

Instalação
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/medicamentos-api.git
cd medicamentos-api

# 2. Criar e ativar um ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux / MacOS
venv\Scripts\activate     # Windows

# 3. Instalar dependências
pip install -r requirements.txt

# 4. Configurar credenciais do Google Cloud Vision
export GOOGLE_APPLICATION_CREDENTIALS="seu_arquivo_credenciais.json"

🗂️ Estrutura do Projeto
📦 medicamentos-api
├── app/
│   ├── __init__.py
│   ├── routes.py            # Rotas da API Flask
│   ├── image_processing.py  # Funções de OCR e Google Vision
│   ├── text_processing.py   # Limpeza, filtragem e comparação de textos
│   ├── config.py            # Configuração de credenciais do Google
│   └── ...
├── requirements.txt
├── run.py                   # Inicializador da API
└── README.md

🌐 Endpoints
1️⃣ POST /detect-text

Detecta medicamentos a partir de uma imagem enviada via multipart/form-data.

Requisição
POST /detect-text HTTP/1.1
Content-Type: multipart/form-data


Parâmetros:

Campo	Tipo	Obrigatório	Descrição
image	file	✅	Imagem contendo o nome do medicamento

Exemplo via cURL:

curl -X POST http://localhost:5000/detect-text \
  -F "image=@dipirona-caixa.jpg"

Resposta de Sucesso – 200
{
  "matched_medication": "dipirona monoidratada"
}

Resposta de Sucesso (quando não encontrado) – 200
{
  "matched_medication": "Nenhum medicamento identificado"
}

Resposta de Erro – 400
{
  "error": "Nenhuma imagem enviada"
}

Resposta de Erro – 500
{
  "error": "Erro na API: timeout ao processar imagem"
}

⚡ Fluxo Interno da API

Upload da imagem → Usuário envia imagem no endpoint /detect-text.

Redimensionamento → A imagem é compactada para otimizar performance.

OCR local (Pytesseract) → Tenta extrair o texto.

Fallback (Google Vision) → Se o OCR local falhar, usa a API da Google.

Processamento de texto

Remove stopwords irrelevantes.

Normaliza acentuação e pontuação.

Aplica tokenização com NLTK.

Comparação de similaridade (Jaccard) → Verifica correspondência com medicamentos conhecidos.

Retorno JSON → Nome do medicamento identificado.

🧠 Lógica de Detecção
Extração de texto

Preferência: Pytesseract → Mais rápido e offline.

Fallback: Google Vision API → Alta precisão para imagens complexas.

Processamento de texto

Normalização → unidecode, remoção de números e caracteres especiais.

Remoção de palavras irrelevantes (stopwords).

Tokenização com NLTK.

Comparação com base de medicamentos.

Base inicial de medicamentos
base_medications = [
    'dipirona monoidratada',
    'dipirona',
    'paracetamol',
    'dicloridrato de levocetirizina',
    'ibuprofeno',
    'domperidona',
    'acebrofilina'
]

📌 Exemplo Completo de Uso
Requisição
curl -X POST http://localhost:5001/detect-text \
  -F "image=@remedio.jpg"
Resposta
{
  "matched_medication": "paracetamol"
}

🚨 Tratamento de Erros
Cenário	Código	Mensagem
Nenhuma imagem enviada	400	"Nenhuma imagem enviada"
Erro no OCR	500	"Erro no pytesseract: <mensagem>"
Timeout no Google Vision	500	"Erro na API: timeout"
Nenhum medicamento encontrado	200	"Nenhum medicamento identificado"
📈 Futuras Melhorias

 Expandir base de medicamentos com dados da ANVISA.

 Implementar banco de dados para cache de detecções.

 Suporte a múltiplos idiomas.

 Ajustar sensibilidade do cálculo de similaridade.