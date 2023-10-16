---
title: Introdução ao Tesseract OCR
description: Conceitos iniciais sobre essa engine the OCR.
date: '2023-10-07'
categories:
    - ocr
    - computer vision
published: true
---

### Introdução ao Tesseract OCR

É uma engine de OCR (Optical Character Recognition). É uma ferramenta de código aberto que permite converter imagens de texto em texto editável. O Tesseract é usado em várias aplicações, como o Google Books e o Google Translate. A partir da quarta versão, possui suporte para mais de 100 idiomas, incluindo português.

Nesse artigo, usaremos o `pytesseract`, um wrapper para Python que permite usar o Tesseract OCR, assim como outras libs para processamento de imagens.

```python
!pip install pytesseract
!pip install numpy
!pip install opencv-python
!pip install matplotlib

import pytesseract
import numpy as np
import cv2 
```