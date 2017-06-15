---
layout: post
title:  "Rusty Hungry Marxists! On verra où est-ce qu'on atteint!"
categories: jekyll update
summary: "In this first blog post, a little about myself and solving the Dining Philosophers problem in Rust"
---

This is the beginning of my little blog space on the internet. I'm not sure what to do with it or what will come of it, but I hope to engage a few people. My name is Omar Akkila and I am a recent software engineering graduate from McGill University who happens to also be on the job hunt. With the unemployment, I have the benefit (_wholly subjective_) of having some free time.

![rust-logo]

Enter [Rust][rust-site]. The promise of performance and safety coupled with modern language features was just too enticing. I got started by reading sections of the [Rust book][rust-book] and by playing around in the [Rust playground][rust-play]. Now while I understand the syntax and the concepts of borrowing, ownership, and  lifetimes _in theory_, the time has come to "fight the borrow checker" as I've heard Rust learners say.

## Dining Philosophers

> Five silent philosophers sit at a round table with bowls of spaghetti. 
> Forks are placed between each pair of adjacent philosophers.
>
> Each philosopher must alternately think and eat. However, a philosopher can only eat spaghetti
> when they have both left and right forks. Each fork can be held by only one philosopher
> and so a philosopher can use the fork only if it is not being used by another philosopher.
> After an individual philosopher finishes eating, they need to put down both forks so that
> the forks become available to others. A philosopher can take the fork on their right or
> the one on their left as they become available, but cannot start eating before getting
> both forks.

Our table is different though. Instead of philosophers, we have some Marxist theoreticians plus the big red santa himself. No matter, let's go ahead and define our diners:

{% highlight rust %}
struct Marxist {
    name: String,
    state: MarxistState,
}

#[derive(Debug)]
enum MarxistState {
    Theorizing,
    Hungry,
    Eating,
}
{% endhighlight %}

[rust-logo]: {{ site.url }}/assets/imgs/rust_logo_black.png
{: height="150px" width="150px" style="display:block; margin:0 auto"}
[rust-site]: https://www.rust-lang.org/en-US/
[rust-book]: https://doc.rust-lang.org/book/
[rust-play]: https://play.rust-lang.org/
