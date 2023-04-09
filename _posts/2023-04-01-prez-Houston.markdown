---
layout: post
type: communication
support: powerpoint
link: https://arxiv.org/abs/2212.05996
title: Dirichlet-Survival Process - Scalable Inference of Topic-Dependent Diffusion Networks
authors: <b>G. Poux-Médard</b>, J. Velcin, S. Loudcher
journal: ECIR
year: 2023
doi: 10.1007/978-3-031-28238-6_47
date: 2023-04-01
description: # Add post description (optional)
img: articles/covers/30_Houston_poster.jpg
fig-caption: By jointly considering author, content and publication date in a sequential data stream, the Dirichlet-Survival process
 recovers topic-dependent diffusion networks, whose edges are weighted over time.
tags: [spreading process, network inference, clustering, bayesian nonparametrics]
---

Information spread on networks can be efficiently modeled by considering three features: documents' 
content, time of publication relative to other publications, and position of the spreader in the 
network. Most previous works model up to two of those jointly, or rely on heavily parametric 
approaches. Building on recent Dirichlet-Point processes literature, we introduce the Houston 
(Hidden Online User-Topic Network) model, that jointly considers all those features in a non-parametric 
unsupervised framework. It infers dynamic topic-dependent underlying diffusion networks in a 
continuous-time setting along with said topics. It is unsupervised; it considers an unlabeled 
stream of triplets shaped as (time of publication, information's content, spreading 
entity) as input data. Online inference is conducted using a sequential Monte-Carlo algorithm 
that scales linearly with the size of the dataset. Our approach yields consequent improvements 
over existing baselines on both cluster recovery and subnetworks inference tasks. 

<br>

## <center><u>Poster</u></center>
<center>
<object data="/assets/img/articles/Houston/Poster.pdf" type="application/pdf" width="100%" height="700px">
    <embed src="/assets/img/articles/Houston/Poster.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/img/articles/Houston/Poster.pdf">Download PDF</a>.</p>
</object>
</center>
