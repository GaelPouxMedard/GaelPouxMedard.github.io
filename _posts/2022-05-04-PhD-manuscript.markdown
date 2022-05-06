---
layout: post
type: PhD
support: PhD
link: 
title: Interactions in Information Spread
authors: <b>G. Poux-Médard</b>
journal: PhD manuscript
year: 2022
doi: 
date: 2022-05-04
description: # Add post description (optional)
img: articles/covers/21-PhD-manuscript.jpg
fig-caption: Interactions in information spread are rare and brief, and their role is hard to assess. We develop a panel a methods to alleviate these problems.
tags: [Interaction, Information spread, Multivariate point process, 
Hawkes process, Block Models, SBM, MMSBM, Dynamic networks,
Survival analysis, Dirichlet process, Bayesian inference,
Social network analysis, Network structure inference, 
Information diffusion, Influence estimation, 
Document clustering, Recommender systems]
---

Since the invention of writing 5~000 years ago, textual information 
data flows got generated at an increasing pace. The generation rate 
has been greatly influenced by technical innovations: clay tablets, 
papyrus, paper, press, and more recently the Internet. At the same 
time, new methods designed to handle and archive this growing 
information flows emerged (in the same order as before): clay 
archives (Nippur, Mari), early libraries (Alexandria, Rome's 
Tabularia, Athens' Metroon), religious scriptoriums (abbeys, 
monasteries), modern libraries and, more recently, machine learning. 
Each of these aims at easing information retrieval.

Nowadays, archiving is not enough anymore. The quantity of data 
that gets generated requires new tools for information retrieval. 
In particular, automatically generating summaries of large data flows 
became a priority. Instead of referencing every single data piece 
as in traditional archival techniques, a more relevant approach 
consists in understanding the global ideas conveyed in data flows. 
To spot such global trends, a fine comprehension of the underlying 
data generation mechanisms is required.

In the rich literature tackling this problem, the question of information 
interaction remains nearly unexplored. Explicitly, does previously 
generated data influence on ulterior data generation processes. In this 
manuscript, we develop a panel of methods that explores this specific 
aspect of data generation.

First, we investigate the frequency of such interactions. Building on 
recent advances in Stochastic Block Modelling, we explore the role of 
interactions in several social networks. We find that **interactions are rare** 
in these datasets.

Then, we wonder how interactions evolve over time; the influence of 
previously generated data on ulterior data generation processes should 
not last indefinitely. We model this using dynamic network inference 
advances on social media datasets. We conclude that **interactions are brief** 
and that their influence typically decays in an exponential fashion.

Finally, as an answer to the previous points, we design a framework that 
jointly **models rare and brief interactions**. Doing so, we exploit 
a recent bridge made between Dirichlet processes and Point processes. We 
improve over this advance and discuss the more general Dirichlet-Point 
processes and their application to the understanding of interaction processes. 
We conduct a large-scale application on Reddit, and find that 
**interactions play a minor role** in this dataset.

From a broader perspective, our work results in a collection of highly 
flexible models and in a rethinking of core concepts of machine learning, 
which both open a range of novel perspectives, either in terms of real-world 
applications or in terms of technical improvements.

## <center><u>The manuscript</u></center>
<center>
<object data="/assets/img/articles/These/Manuscript.pdf" type="application/pdf" width="100%" height="700px">
    <embed src="/assets/img/articles/These/Manuscript.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/img/articles/These/Manuscript.pdf">Download PDF</a>.</p>
    </embed>
</object>
</center>

<br>
<br>


<figure>
<img src="/assets/img/articles/These/Clusters_illustr.png" alt="Image" style="width:90%">

<figcaption align = "center">
    <b>A typical result</b> - Set of manually selected 
    clusters along with the vocabulary of their documents (top), 
    their inferred dynamics (middle) and the clusters that 
    influenced them on the real-time axis (bottom).
</figcaption>
</figure>