---
layout: post
type: communication
support: powerpoint
link: https://arxiv.org/abs/2212.05995
title: Multivariate Powered Dirichlet-Hawkes Process
authors: <b>G. Poux-Médard</b>, J. Velcin, S. Loudcher
journal: ECIR
year: 2023
doi: 10.1007/978-3-031-28238-6_4
date: 2023-04-01
description: # Add post description (optional)
img: articles/covers/29_MPDHP_prez.jpg
fig-caption: The probability of a meme to belong to either cluster depends on the population of every cluster
    at a given time. The MPDHP can be used as a Bayesian prior in virtually any multivariate clustering task
    to account for temporal variations.
tags: [dirichlet process, multivariate hawkes process, clustering, information spread, sequential data]
---

The publication time of a document carries a relevant information about its semantic content. 
The Dirichlet-Hawkes process has been proposed to jointly model textual information and 
publication dynamics. This approach has been used with success in several recent works, 
and extended to tackle specific challenging problems --typically for short texts or entangled 
publication dynamics. However, the prior in its current form does not allow for complex 
publication dynamics. In particular, inferred topics are independent from each other --a 
publication about finance is assumed to have no influence on publications about politics, for instance.

In this work, we develop the Multivariate Powered Dirichlet-Hawkes Process (MPDHP), that 
alleviates this assumption. Publications about various topics can now influence each other. 
We detail and overcome the technical challenges that arise from considering interacting topics. 
We conduct a systematic evaluation of MPDHP on a range of synthetic datasets to define its 
application domain and limitations. Finally, we develop a use case of the MPDHP on Reddit 
data. At the end of this article, the interested reader will know how and when to use MPDHP, and when not to.

<br>

## <center><u>Slides</u></center>
<center>
<object data="/assets/img/articles/Presentations/SlidesMPDHPECIR.pdf" type="application/pdf" width="100%" height="700px">
    <embed src="/assets/img/articles/Presentations/SlidesMPDHPECIR.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/img/articles/Presentations/SlidesMPDHPECIR.pdf">Download PDF</a>.</p>
</object>
</center>