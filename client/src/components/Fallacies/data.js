const fallacies = [
    {
        fallacy: "argumentum ad hominem",
        translation: "to the man",
        image: require(`../../assets/ad-hominem.jpg`),
        description: `argument is avoided by attacking the character, motive, or other attribute of the person making the argument, 
or persons associated with the argument, rather than attacking the substance of the argument itself.`,
        similar: ["tu quoque", "circumstantial", "guilt by association", "abusive fallacy"],
        videos: ["https://www.youtube.com/watch?v=FD50OTR3arY", "https://www.youtube.com/watch?v=IEQDP2pYrmM"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Ad_hominem"
            }
        ],
        examples: [
            `MacDougal roots for a British football team. Clearly he’s unfit to be a police chief in Ireland.`,
            `All people from Crete are liars`
        ]
    },
    {
        fallacy: "straw man",
        translation: null,
        image: require(`../../assets/straw-man.jpg`),
        description: `argument is avoided by attacking another argument entirely. One who engages in this fallacy is said to be 
"attacking a straw man."`,
        similar: ["fallacy of relevance", "slippery slope", "quoting out of context"],
        videos: ["https://www.youtube.com/watch?v=hfil34ayaEU", "https://www.youtube.com/watch?v=D312ssRfWMA"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Straw_man"
            }
        ],
        examples: [
            `A: We should relax the laws on beer. |B: No, any society with unrestricted access to intoxicants loses its work ethic 
and goes only for immediate gratification.`,
            `I submit to you that if you can't take this evidence and find these defendants guilty on this evidence then we might 
as well open all the banks and say, "Come on and get the money, boys," because we'll never be able to convict them.`,
            `The Senator thinks we can solve all our ecological problems by driving a Prius.`,
            `Quite the contrary, the Senator thinks the environment is such a wreck that no one’s car choice or driving habits 
would make the slightest difference.`
        ]
    },
    {
        fallacy: "argumentum ad ignorantiam",
        translation: "to ignorance",
        image: require(`../../assets/ad-ignorantium.jpg`),
        description: `asserts that a proposition is true because it has not yet been proven false or a proposition is false because 
it has not yet been proven true.`,
        similar: ["appeal to the stone", "from incredulity", "from silence"],
        videos: ["https://www.youtube.com/watch?v=p9ezNBBcg_g"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Argument_from_ignorance"
            }
        ],
        examples: [
            `We have no evidence that the Illuminati ever existed. They must have been so clever they destroyed all the evidence.`,
            `I know nothing about Tank Johnson except that he has a criminal record as long as your leg, but I’ll bet he’s really 
just misunderstood.`
        ]
    },
    {
        fallacy: "false dilemma",
        translation: null,
        image: require(`../../assets/false-dilemma.jpg`),
        description: `two alternative statements are held to be the only possible options when in reality there are more.`,
        similar: ["false dichotomy", "fallacy of bifurcation", "black-or-white fallacy", "either/or fallacy", "black-and-white thinking"],
        videos: ["https://www.youtube.com/watch?v=XIyLqUOJ0lY", "https://www.youtube.com/watch?v=9ua74hdBhfI", "https://www.youtube.com/watch?v=Dln3DJEcghY"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/False_dilemma"
            }
        ],
        examples: [
            `Either we go to war, or we appear weak.`,
            `Either you love me, or you hate me.`
        ]
    },
    {
        fallacy: "slippery slope",
        translation: null,
        image: require(`../../assets/slippery-slope.jpg`),
        description: `assertion that a relatively small first step leads to a chain of related events culminating in some significant 
(usually negative) effect.`,
        similar: ["thin edge of the wedge", "camel's nose", "domino fallacy", "dam burst"],
        videos: ["https://www.youtube.com/watch?v=t2ePCnSyQ4w", "https://www.youtube.com/watch?v=kIv3m2gMgUU"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Slippery_slope"
            }
        ],
        examples: [
            `We cannot unlock our child from the closet because if we do, she will want to roam the house.  If we let her roam the 
house, she will want to roam the neighborhood.  If she roams the neighborhood, she will get picked up by a stranger in a van, who 
will sell her in a sex slavery ring in some other country.  Therefore, we should keep her locked up in the closet.`,
            `If you accept that the story of Adam and Eve was figurative, then you will do the same for most of the Old Testament 
stories of similar literary styles.  Once you are there, the New Testament and the story of Jesus does not make sense, which will 
lead you to believe that the resurrection of Jesus was a “spiritual” one.  Once you accept that, you won’t be a Christian anymore; 
you will be a dirty atheist, then you will have no morals and start having sex with animals of a barnyard nature.  So you better take 
the story of Adam and Eve literally, before the phrase, “that chicken looks delicious”, takes on a whole new meaning.`
        ]
    },
    {
        fallacy: "petitio principii",
        translation: "assuming the initial point",
        image: require(`../../assets/petitio-principii.jpg`),
        description: `argument is just repeating what they already assumed beforehand`,
        similar: ["begging the question", "circular argument"],
        videos: ["https://www.youtube.com/watch?v=IJ2dWrI-PTA", "https://www.youtube.com/watch?v=c_fOyxk7DdU", "https://www.youtube.com/watch?v=OAXKc-rvMa8"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Begging_the_question"
            }
        ],
        examples: [
            `Africa is the largest continent because it has the largest area of any continent.`,
            `Left-handed people are better painters because right-handed people can't paint as well.`
        ]
    }
]

export default fallacies;