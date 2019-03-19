const fallacies = [
    {
        fallacy: "argumentum ad hominem",
        translation: "to the man",
        image: require(`../../assets/ad-hominem.jpg`),
        description: `argument is avoided by attacking the character, motive, or other attribute of the person making the argument, 
or persons associated with the argument, rather than attacking the substance of the argument itself.`,
        similar: ["tu quoque", "circumstantial", "guilt by association", "abusive fallacy"],
        explained: ["FD50OTR3arY", "IEQDP2pYrmM"],
        real_life: ["SVhTAY0R_SE"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Ad_hominem"
            }
        ],
        examples: [
            `A: Because dark chocolate has antioxidants and most other candies only have sugar, which
rots your teeth, dark chocolate is therefore better than most sweets.`,
            `Abusive - B: Yeah, but you're a greedy jerk!`,
            `Circumstantial - B: Yeah, but you work for the chocolate company. You get paid to say that.`,
            `Tu quoque - B: But I saw you eating a candy cane.`,
            `Association - B: Nazis also believed dark chocolate was better.`
        ]
    },
    {
        fallacy: "straw man",
        translation: "",
        image: require(`../../assets/straw-man.jpg`),
        description: `argument is avoided by attacking another argument entirely. One who engages in this fallacy is said to be 
"attacking a straw man."`,
        similar: ["fallacy of relevance", "slippery slope", "quoting out of context"],
        explained: ["hfil34ayaEU", "D312ssRfWMA", "5gVze3BvjZA"],
        real_life: ["5ln7chQuKyg"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Straw_man"
            }
        ],
        examples: [
            `A: We should relax the laws on beer.|B: No, any society with unrestricted access to intoxicants loses its work ethic 
and goes only for immediate gratification.`,
            `I submit to you that if you can't take this evidence and find these defendants guilty on this evidence then we might 
as well open all the banks and say, "Come on and get the money, boys," because we'll never be able to convict them.`,
            `The Senator thinks we can solve all our ecological problems by driving a Prius.`
        ]
    },
    {
        fallacy: "argumentum ad ignorantiam",
        translation: "to ignorance",
        image: require(`../../assets/ad-ignorantium.jpg`),
        description: `asserts that a proposition is true because it has not yet been proven false or a proposition is false because 
it has not yet been proven true.`,
        similar: ["appeal to the stone", "from incredulity", "from silence"],
        explained: ["p9ezNBBcg_g", "LCCijKuS5YA"],
        real_life: ["rB2jmuZAJtw"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Argument_from_ignorance"
            }
        ],
        examples: [
            `There is no evidence of foul play here.`,
            `Although we have proven that the moon is not made of spare ribs, we have not proven that its core cannot be filled with them; 
therefore, the moon’s core is filled with spare ribs.`
        ]
    },
    {
        fallacy: "false dilemma",
        translation: "",
        image: require(`../../assets/false-dilemma.jpg`),
        description: `two alternative statements are held to be the only possible options when in reality there are more.`,
        similar: ["false dichotomy", "fallacy of bifurcation", "black-or-white fallacy", "either/or fallacy", "black-and-white thinking"],
        explained: ["XIyLqUOJ0lY", "9ua74hdBhfI"],
        real_life: ["Dln3DJEcghY", "MSLeb9sxxu8"],
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
        translation: "",
        image: require(`../../assets/slippery-slope.jpg`),
        description: `assertion that a relatively small first step leads to a chain of related events culminating in some significant 
(usually negative) effect.`,
        similar: ["thin edge of the wedge", "camel's nose", "domino fallacy", "dam burst"],
        explained: ["t2ePCnSyQ4w"],
        real_life: ["kIv3m2gMgUU"],
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
        explained: ["IJ2dWrI-PTA", "c_fOyxk7DdU", "OAXKc-rvMa8"],
        real_life: ["OAVp6gnIgHY"],
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
    },
    {
        fallacy: "hasty generalization",
        translation: "",
        image: require(`../../assets/hasty-generalization.jpg`),
        description: `faulty generalization by reaching an inductive generalization based on insufficient evidence`,
        similar: ["faulty generalization", "jumping to conclusions", "inductive fallacy", "overwhelming exception", "biased sample", "misleading vividness"],
        explained: ["b_UqIfw7Zmw"],
        real_life: ["KqeqTWD2Ymg", "WfuHuFx31rE"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Faulty_generalization#Hasty_generalization"
            }
        ],
        examples: [
            `X is true for A|X is true for B|therefore, X is true for C, D, E, etc`,
            `People nowadays only vote with their emotions instead of their brains.`
        ]
    }, 
    {
        fallacy: "ignoratio elenchi",
        translation: "ignoring refutation",
        image: require(`../../assets/ignoratio-elenchi.jpg`),
        description: `presenting an argument that may or may not be logically valid and sound, but (whose conclusion) fails to 
address the issue in question.`,
        similar: ["missing the point", "red herring", "irrelevant conclusion"],
        explained: ["9FlerH-fp5k", "UzroWL3NlZA"],
        real_life: ["zLS-npemQYQ"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Irrelevant_conclusion"
            }
        ],
        examples: [
            `There is no point in people ranting on social media about politics; the president is not going to read it anyway.`,
            `A: Does the law allow me to do that?|B: The law should allow you to do that because this and that.`
        ]
    },
    {
        fallacy: "tu quoque",
        translation: "you also",
        image: require(`../../assets/tu-quoque.jpg`),
        description: `intends to discredit the opponent's argument by asserting the opponent's failure to act consistently in 
accordance with it's conclusion(s).`,
        similar: ["ad hominem", "appeal to hypocrisy"],
        explained: ["Pu57QqzNOHQ", "FD50OTR3arY"],
        real_life: ["JhzEYFvO8Pc", "tKO8nMNmgWM"],
        articles: [
            {
                source: "Wikipedia",
                url: "https://en.wikipedia.org/wiki/Tu_quoque"
            }
        ],
        examples: [
            `Person A makes claim X.|Person B asserts that A's actions or past claims are inconsistent with the truth of claim X.|Therefore, 
X is false.`,
            `A: B is guilty of defrauding the government out of tax dollars.|B: How can you say that when you yourself have 20 outstanding 
parking tickets?`
        ]
    }
]

export default fallacies;