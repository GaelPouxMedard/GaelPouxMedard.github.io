---
layout: post
type: communication
support: powerpoint
link: 
title: Powered Hawkes-Dirichlet Process - Challenging Textual Clustering using a Flexible Temporal Prior
authors: <b>G. Poux-Médard</b>
journal: ICDM
year: 2021
doi: 
date: 2021-12-08
description: # Add post description (optional)
img: articles/covers/12_prez-PDHP.jpg
fig-caption: The appearance of a document (news, tweet, article, etc.) is conditioned by its semantic content, 
 but also by its publication date wrt previous articles' ones, to a certain extent. 
 By varying r, we can choose whether to focus our clustering algorithm more on the 
 temporal side or more on the semantic side, or a mixture of both. Here, we present wordclouds, triggering  kernels  
 and real-intensities for one of the clusters (here related to 2019 Sri Lanka bombings) for various values of r. We say 
 that our model can automatically recover a _story_ (the sequence of related publications and intertwinned their dynamics).
tags: [Clustering, Temporal Bayesian Prior, Powered Dirichlet Process, Hawkes Process, PDP, Dirichlet]
---

Presentation of the paper at ICDM'21, in Auckland (online).

The textual content of a document and its publication date are intertwined. 
For example, the publication of a news article on a topic is influenced by 
previous publications on similar issues, according to underlying temporal 
dynamics. However, it can be challenging to retrieve meaningful information 
when textual information conveys little information or when temporal dynamics 
are hard to unveil. Furthermore, the textual content of a document is not 
always linked to its temporal dynamics.
We develop a flexible method to create clusters of textual documents 
according to both their content and publication time, the Powered 
Dirichlet-Hawkes process (PDHP). We show PDHP yields significantly 
better results than state-of-the-art models when temporal information 
or textual content is weakly informative. The PDHP also alleviates the 
hypothesis that textual content and temporal dynamics are always perfectly 
correlated. PDHP allows retrieving textual clusters, temporal clusters, 
or a mixture of both with high accuracy when they are not. We demonstrate 
that PDHP generalizes previous work --such as the Dirichlet-Hawkes process 
(DHP) and Uniform process (UP). Finally, we illustrate the changes induced 
by PDHP over DHP and UP in a real-world application using Reddit data.


<br><br>

## <center><u>The talk</u></center>
<center>
<div style="width: 100%; aspect-ratio: 16 / 9;">
<iframe width="100%" height="100%" src="https://www.youtube.com/watch?v=FaipVzux7gI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</center>

<br><br>

## <center><u>The slides</u></center>
<center>
<object data="/assets/img/articles/PDHP/Diaporama.pdf" type="application/pdf" width="100%" height="700px">
    <embed src="/assets/img/articles/PDHP/Diaporama.pdf"></embed>
</object>
</center>

