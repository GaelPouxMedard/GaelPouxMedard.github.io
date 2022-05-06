---
layout: post
type: communication
support: powerpoint
link: https://arxiv.org/pdf/2104.13695
title: Information Interaction Profile of Choice Adoption
authors: <b>G. Poux-Médard</b>
journal: ECML-PKDD'21
year: 2021
doi: 10.1007/978-3-030-86523-8_7
date: 2021-06-18
description:  # Add post description (optional)
img: articles/covers/3_prez_interrate_cover.jpg # Add image post (optional)
fig-caption: 
tags: [Information, Interaction, Convex Modeling, Dynamics, Human Decision]
---

Presentation of the paper at ECML-PKDD'21, online.

Interactions between pieces of information (_entities_) play a substantial 
role in the way an individual acts on them: adoption of a product, the spread of 
news, strategy choice, etc. However, the underlying interaction mechanisms are 
often unknown and have been little explored in the literature.
We introduce an efficient method to infer both the entities interaction network 
and its evolution according to the temporal distance separating interacting entities; 
together, they form the _interaction profile_. The interaction profile allows 
characterizing the mechanisms of the interaction processes.
We approach this problem _via_ a convex model based on recent advances in multi-kernel 
inference. We consider an ordered sequence of exposures to entities (URL, ads, situations) 
and the actions the user exerts on them (share, click, decision). We study how users 
exhibit different behaviors according to _combinations_ of exposures they have 
been exposed to. We show that the effect of a combination of exposures on a user is 
more than the sum of each exposure's independent effect--there is an interaction. We 
reduce this modeling to a non-parametric convex optimization problem that can be 
solved in parallel. Our method recovers state-of-the-art results on interaction processes on three 
real-world datasets and outperforms baselines in the inference of the underlying data 
generation mechanisms. Finally, we show that interaction profiles can be visualized 
intuitively, easing the interpretation of the model.


## <center><u>The poster</u></center>
![alt text](/assets/img/articles/InterRate/Poster.jpg)

<br><br>
 
## <center><u>The talk at ECML-PKDD</u></center>
<!-- SlidesLive -->
<div id="presentation-embed-38963538" class="container container-sm"></div>
<script src='https://slideslive.com/embed_presentation.js'></script>
<script>
  embed = new SlidesLiveEmbed('presentation-embed-38963538', {
        presentationId: '38963538',
        autoPlay: false, // change to true to autoplay the embedded presentation
        verticalEnabled: true
    });
</script>

<br><br>

## <center><u>The slides</u></center>
<object data="/assets/img/articles/InterRate/Diaporama.pdf" type="application/pdf" width="100%" height="700px">
    <embed src="/assets/img/articles/InterRate/Diaporama.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="/assets/img/articles/InterRate/Diaporama.pdf">Download PDF</a>.</p>
</object>


