import { type ResourceIconName } from "@/components/resources/resource-icon";
import { type TileColor } from "@/content/leadership";

export interface Resource {
  /** Anchor id on the full library page (/resources/library#<slug>) — the resources index
   * links a book's thumbnail/title straight to its entry there rather than a page of its own.
   * Unique across the whole library, not just within its category. */
  readonly slug: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly author?: string;
  /** Neutral summary of what the work is about. Library page only. */
  readonly description?: string;
  /** The personal reflection: shown on both the resources index preview and the library page. */
  readonly whyItMattersToMe?: string;
  /** Specific ideas or practices taken from this work. Library page only. */
  readonly ideasCarriedForward?: readonly string[];
  /** Where this shows up in the owner's actual work — a project, a decision, a habit. Library
   * page only. */
  readonly whereItShowsUpInMyWork?: string;
  /** Public-relative cover candidates, most preferred first — same real-asset-first pattern
   * as the portrait and the Leadership page's idea sources. Drop a file at one of these paths
   * and it replaces the fallback on the next build. */
  readonly coverCandidates: readonly string[];
  readonly url?: string;
}

export interface ResourceCategory {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly icon: ResourceIconName;
  readonly tile: TileColor;
  readonly resources: readonly Resource[];
}

export interface ResourceGroup {
  readonly slug: string;
  readonly title: string;
  readonly icon: ResourceIconName;
  readonly tile: TileColor;
  readonly description: string;
  readonly categories: readonly ResourceCategory[];
}

/**
 * Books, research, and reading that inform how the site's owner leads and what he reads for
 * its own sake.
 *
 * Every title, author, and blurb here is real and verifiable — nothing is invented to pad out
 * a category. Some categories currently hold only two or three entries; that's the honest
 * count, not a placeholder. Add more the same way covers get added elsewhere on the site: drop
 * the entry in here and, optionally, the cover image at the path it names.
 */
export const RESOURCE_GROUPS: readonly ResourceGroup[] = [
  {
    slug: "ideas-that-shape-my-work",
    title: "Ideas That Shape My Work",
    icon: "lightbulb",
    tile: "blue",
    description:
      "Books, research, and frameworks that influence how I lead, build teams, and create " +
      "outcomes.",
    categories: [
      {
        slug: "leadership-people",
        title: "Leadership & People",
        description: "Understanding people, building trust, coaching, and developing leaders.",
        icon: "people",
        tile: "blue",
        resources: [
          {
            slug: "multipliers",
            title: "Multipliers",
            author: "Liz Wiseman",
            whyItMattersToMe: "Helped change how I thought about my role as a leader. My job isn't to have all the answers; it's to draw out the intelligence and capability of the people around me, give them room to lead, and help them become better than they thought they could be.",
            coverCandidates: ["/books/multipliers.jpg"],
            url: "https://www.amazon.com/dp/B01KT18416",
          },
          {
            slug: "crucial-conversations",
            title: "Crucial Conversations",
            subtitle: "Tools for Talking When Stakes are High",
            author: "Joseph Grenny, Kerry Patterson, Ron McMillan, Al Switzler, Emily Gregory",
            whyItMattersToMe: "Introduces important communication skills when the stakes are high.",
            coverCandidates: ["/books/crucial-conversations-cover.jpg"],
            url: "https://www.amazon.com/Crucial-Conversations-Tools-Talking-Stakes/dp/1260474186/ref=sr_1_1?crid=T09561M0TQ1Q&dib=eyJ2IjoiMSJ9.VufgGWf1JuxUe2Xlnt-x6BJNausDD21wNBytKhF3AOT5RJLQbom6UaKD2NdAii9EujBlSQmHnWjVXU8CmuANQC-ABBTqHOhUeM73ni0IBo3QCa21ldGN955WexZO_mA1vRDhKBAFTnQbgIx7HUC-QFR_SYGBLNlehsUlW4wwtOcB6HUT_iasSdpP2nItmBM1MUxgYF3V-6Xs7kjEy2TLS8m-bLigXYyaA_8R27ZEFpg.heJqdQlS2io7uxMDx604eH4U8lDOC0-JC6ancP5Imd4&dib_tag=se&keywords=crucial+conversations&qid=1787688247&sprefix=crucial%2Caps%2C179&sr=8-1",
          },
          {
            slug: "hidden-potential",
            title: "Hidden Potential",
            subtitle: "The Science of Achieving Greater Things",
            author: "Adam Grant",
            whyItMattersToMe: "Reinforced my belief that potential isn't fixed—and that leaders can create the conditions, opportunities, and support that help people grow beyond what they thought possible.",
            coverCandidates: ["/books/hiddenpotential.jpg"],
            url: "https://www.amazon.com/Hidden-Potential-Science-Achieving-Greater/dp/0593653661/ref=sr_1_1?crid=3REO11X8ZF3FE&dib=eyJ2IjoiMSJ9.boDWojqqJ3G122eaIdxc14VyjP_pGh8_yQ0L5CAhs6uS-S8edM5rcHU6HWjMWH1kxkulTBtIKIoZEw0sSyG2EUfe7onMD4HtfD0kl_ox5ApCW0vlAVfUt86DdKl5s2kj27p7GhCB8XdEQ0mW4akdIo_BX2CqFwUeXlh6Rm6L6r197BncZEpU9UrTziLsrs5HgMqfIoG37gUZcPshvlRsgM2mjdXIKDVd3Mo2enRjqWk.M63o4BbxhMpdXXUgfIQbPEsf2U99xvkOCKF1-t2tnw0&dib_tag=se&keywords=hidden+potential+adam+grant&qid=1787697291&sprefix=Hidden+Potential%2Caps%2C178&sr=8-1",
          },
          {
            slug: "radical-candor",
            title: "Radical Candor",
            subtitle: "Be a Kick-Ass Boss Without Losing Your Humanity",
            author: "Kim Scott",
            whyItMattersToMe: "",
            coverCandidates: ["/books/radical-candor.jpg"],
            url: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375/ref=sr_1_1?crid=X6BJTMSFZOF3&dib=eyJ2IjoiMSJ9.sawEdrjiCDGjVf8o9InBjax3WabUoTRECdHSx0F9aMTuqexbAwmm_B37wKLnDenQXnIGboIXtY4l2S480B835v2LgsUd4jEhX67grzryeAQLw5XdrMfPXaXMGBF80vDDNPzrLlAQwBtDwU3QVd35iP_agS9OITV_F6V7t2q7FYiineTZazJjE05wB6af5VBygtyeJaatpJ-qkf3E4t3aIUt1QzdxcI8Bqd9grM1vftc.izM_9fc_JHGJ_azRup41Atubjj982xn5cfLwz-3dmT8&dib_tag=se&keywords=radical+candor&qid=1787695025&sprefix=radical+%2Caps%2C178&sr=8-1",
          },
          {
            slug: "dare-to-lead",
            title: "Dare to Lead",
            author: "Brené Brown",
            whyItMattersToMe: "Reinforced that helping people grow requires both courage and vulnerability. Leaders need to set clear expectations, give honest feedback, admit when they don't have the answer, and create an environment where people can do the same",
            coverCandidates: ["/books/daretolead.jpg"],
            url: "https://www.amazon.com/s?k=Dare+to+Lead+Brene+Brown",
          },
          {
            slug: "strong-ground",
            title: "Strong Ground",
            subtitle: "The Lessons of Daring Leadership, the Tenacity of Paradox, and the Wisdom of the Human Spirit",
            author: "Brene Brown",
            whyItMattersToMe: "",
            coverCandidates: ["/books/strong-ground.jpg"],
            url: "https://www.amazon.com/Strong-Ground-Lessons-Leadership-Tenacity/dp/1984855743/ref=sr_1_1?crid=2IZAIBNURPSFS&dib=eyJ2IjoiMSJ9.z-THlskK9NmUQngg73QALtgmwGh3eEyeZtTk6dFhjPbWFCcim7U5Hry501FYDB4t-_3gY2dZrEesBaUTwOkmc3DfMbELCMnV9pj2qQZBVKr0Cvh2JHq2lB-COoSqQXah3SIGTZ4Wuq4TfAaa9o7m3wefHGN4se9fZG8xJyGlVFE0EQ-_Ev5R3_lPNLlfT35QfMNIb7iWZehbmN_9XOVbRq1EJO_CCxb68d9gIG3IoZw.bjTOocM5DBJtC5lNPQoMNzUA5OTpQk_xjsZ0mQs1Nn4&dib_tag=se&keywords=strong+ground&qid=1787695814&sprefix=strong+ground%2Caps%2C177&sr=8-1",
          },
        ],
      },
      {
        slug: "teams-organizations",
        title: "Teams & Organizations",
        description: "Building high-performing teams and healthy, adaptive organizations.",
        icon: "people",
        tile: "green",
        resources: [
          {
            slug: "leaders-eat-last",
            title: "Leaders Eat Last",
            subtitle: "Why Some Teams Pull Together and Others Don't",
            author: "Simon Sinek",
            whyItMattersToMe: "",
            coverCandidates: ["/books/leaders-eat-last.jpg"],
            url: "https://www.amazon.com/Leaders-Eat-Last-Together-Others/dp/1591848016/ref=sr_1_1?crid=3Q5WLL18DMMTO&dib=eyJ2IjoiMSJ9.J_PnSxzMprWcl6Xfej4pS_tFSfp74xf24QTUz7WROtuNZL-7y3FSWICJcAjR6A4TUBUOWI_x6MJlV4qsrAygVi3kpP0QDWUbR1y26Y3OpVd0_Tr0Dyx9qI1cKC8IeWF_7LfcGdr89dDppimbC-3png5b6QWQIjWr1lVjJBSByieY0uKIFkW1LqXjKetZ1M92m-F3sRmYO0drDbJkQbUoLf6hDCuEgOJWcfCkMhXlPGg.gG0-yr0aJj1n4pmSwU-k9sn0kALZqEuJwRIOqnF1XDY&dib_tag=se&keywords=leaders+eat+last&qid=1787695328&sprefix=leaders+%2Caps%2C210&sr=8-1",
          },
          {
            slug: "the-culture-code",
            title: "The Culture Code",
            author: "Daniel Coyle",
            whyItMattersToMe: "The secrets of highly successful teams and cultures.",
            coverCandidates: ["/books/culturecode.jpg"],
          },
          {
            slug: "team-of-teams",
            title: "Team of Teams",
            author: "Gen. Stanley McChrystal",
            whyItMattersToMe: "New rules for complex, distributed organizations.",
            coverCandidates: ["/books/teamofteams.jpg"],
          },
        ],
      },

      {
        slug: "psychology",
        title: "Psychology & Decision Making",
        description: "How we think, judge, and decide — and where intuition leads us astray.",
        icon: "people",
        tile: "green",
        resources: [
          {
            slug: "thinking-fast-thinking-slow",
            title: "Thinking Fast, Thinking Slow",
            description: "Deepened my awareness of cognitive bias and how easily intuition can influence judgment and decision-making.",
            author: "Daniel Kahneman",
            coverCandidates: ["/books/thinking-fast-thinking-slow.jpg"],
            url: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/ref=sr_1_1?crid=36GPC4PB0T12G&dib=eyJ2IjoiMSJ9.ceqZU8DyU2py75144OBkf9zHGHjPP8egj_5tnRTf3vYvhSfwAwthYHM73CbJGseOZzZBYy_oDK_AMsA-BzME8D_AEyIe1EulFz4-cDgp_CbzVKRvDTeg1_jCw2GaKKpddZOSVVfQR5HsFOX-Lg7cBFkNt2P0nbg9HQEvzyiXMo0SP94Zo_gylyOmEMjuKZtCCOIWTGL5VIKohHZE7jst5AFwU59C3RUN9t9bQCSTCCc.docxLb_x3uYI6AdUcYPeR1MP3HHuCah34_r_c2Dw0VU&dib_tag=se&keywords=thinking+fast&qid=1787696385&sprefix=thinking+fast%2Caps%2C174&sr=8-1",
          },
        ],
      },
      {
        slug: "systems-improvement",
        title: "Systems & Improvement",
        description: "Thinking in systems, constraints, and continuous improvement.",
        icon: "gears",
        tile: "violet",
        resources: [
          {
            slug: "the-goal",
            title: "The Goal",
            subtitle: "A Process of Ongoing Improvement",
            author: "Eliyahu M. Goldratt",
            whyItMattersToMe: "A novel that taught me to find and exploit the system's constraint.",
            coverCandidates: ["/books/thegoal.jpg", "/books/thegoal.png"],
            url: "https://northriverpress.com/the-goal-30th-anniversary-edition/",
          },
          {
            slug: "out-of-the-crisis",
            title: "Out of the Crisis",
            author: "W. Edwards Deming",
            whyItMattersToMe: "Profound lessons on leadership, quality, and systems thinking.",
            coverCandidates: ["/books/outofcrisis.jpg"],
          },
        ],
      },
      {
        slug: "software-engineering",
        title: "Software & Engineering",
        description: "Craft, practices, and principles for building great software.",
        icon: "code",
        tile: "amber",
        resources: [
          {
            slug: "refactoring",
            title: "Refactoring",
            author: "Martin Fowler",
            whyItMattersToMe: "Improving the design of existing code — a foundational skill.",
            coverCandidates: ["/books/refactoring.jpg", "/books/refactoring.png"],
            url: "https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599/ref=sr_1_1?crid=2M1OD8P9AR2BT&dib=eyJ2IjoiMSJ9.d5ydIv1vhzDGghLAj8wLkjmESLrn2GNqUPFOlrQrrDq_m2IBN0eu2CRlC3KkPR4mL8rY6AzrOCsNI_FJgS7iXg-8MngVqhyuiXIuDbeVNsoQunk_5A_ZeNxmftzkskRox8qUdeByj3TSMpNbh49fENsUv6I9IugUYcRnXdUG7kxBa4ZTiZeH215_jW4nIFQk0WyaPC2HoMPLrbWIJQ_0J2-Zz4rzuQS0Ku7WoeDylJA.mLoQQgDbQlURVSimTQYpzdAhMnIi4x6s4F2Vku0tok8&dib_tag=se&keywords=refactoring&qid=1787698000&sprefix=refactorin%2Caps%2C183&sr=8-1",
          },
          {
            slug: "extreme-programming-explained",
            title: "Extreme Programming Explained",
            author: "Kent Beck",
            whyItMattersToMe: "Values and practices that shaped how I engineer.",
            coverCandidates: [
              "/resources/extreme-programming-explained.jpg",
              "/resources/extreme-programming-explained.png",
            ],
          },
        ],
      },
      {
        slug: "product-business",
        title: "Product & Business",
        description: "Understanding customers, creating value, and scaling products and businesses.",
        icon: "chart-up",
        tile: "teal",
        resources: [
          {
            slug: "inspired",
            title: "Inspired",
            author: "Marty Cagan",
            whyItMattersToMe: "How to build products customers truly love.",
            coverCandidates: ["/resources/inspired.jpg", "/resources/inspired.png"],
          },
          {
            slug: "the-lean-startup",
            title: "The Lean Startup",
            author: "Eric Ries",
            whyItMattersToMe: "Build, measure, learn. Repeat.",
            coverCandidates: ["/resources/the-lean-startup.jpg", "/resources/the-lean-startup.png"],
          },
        ],
      },
      {
        slug: "research-papers",
        title: "Research & Papers",
        description: "Research and academic work that informs my thinking.",
        icon: "document",
        tile: "amber",
        resources: [
          {
            slug: "trust-in-a-manager",
            title: "Trust in a Manager and Its Effect on Subordinate Performance",
            author: "Mayer, Davis & Schoorman (1995)",
            whyItMattersToMe: "Foundational research on organizational trust.",
            coverCandidates: [
              "/resources/trust-in-a-manager.jpg",
              "/resources/trust-in-a-manager.png",
            ],
            url: "https://www.makinggood.ac.nz/media/1270/mayeretal_1995_organizationaltrust.pdf",
          },
          {
            slug: "self-determination-theory",
            title: "Self-Determination Theory",
            author: "Deci & Ryan",
            whyItMattersToMe: "Why autonomy, competence, and purpose drive motivation.",
            coverCandidates: ["/books/research.jpg"],
            url: "https://selfdeterminationtheory.org/wp-content/uploads/2020/10/2000_DeciRyan_PIWhatWhy.pdf",
          },
        ],
      },
    ],
  },
  {
    slug: "beyond-work",
    title: "Beyond Work",
    icon: "heart",
    tile: "violet",
    description:
      "Not everything I read needs to make me a better leader. These are the books I read " +
      "for enjoyment, perspective, curiosity, and life. But in the end, I believe they do make " +
      "me a more well rounded person and that leads to better leadership.",
    categories: [
      {
        slug: "fiction",
        title: "Fiction",
        description: "Stories that entertain, inspire, and expand my imagination.",
        icon: "book-open",
        tile: "blue",
        resources: [
          {
            slug: "the-stand",
            title: "The Stand",
            author: "Stephen King",
            coverCandidates: ["/resources/the-stand.jpg", "/resources/the-stand.png"],
          },
          {
            slug: "11-22-63",
            title: "11/22/63",
            author: "Stephen King",
            coverCandidates: ["/resources/11-22-63.jpg", "/resources/11-22-63.png"],
          },
          {
            slug: "the-institute",
            title: "The Institute",
            author: "Stephen King",
            coverCandidates: ["/resources/the-institute.jpg", "/resources/the-institute.png"],
          },
        ],
      },
      {
        slug: "biography-history",
        title: "Biography & History",
        description: "Remarkable lives and important moments in history.",
        icon: "history",
        tile: "green",
        resources: [
          {
            slug: "leonardo-da-vinci",
            title: "Leonardo da Vinci",
            author: "Walter Isaacson",
            coverCandidates: [
              "/resources/leonardo-da-vinci.jpg",
              "/resources/leonardo-da-vinci.png",
            ],
          },
          {
            slug: "endurance",
            title: "Endurance",
            author: "Alfred Lansing",
            coverCandidates: ["/resources/endurance.jpg", "/resources/endurance.png"],
          },
          {
            slug: "the-splendid-and-the-vile",
            title: "The Splendid and the Vile",
            author: "Erik Larson",
            coverCandidates: [
              "/resources/the-splendid-and-the-vile.jpg",
              "/resources/the-splendid-and-the-vile.png",
            ],
          },
        ],
      },
      {
        slug: "curiosity",
        title: "Curiosity",
        description: "Ideas outside my day-to-day work that challenge my assumptions and broaden how I see the world. Can include science, psychology, philosophy, music, and other interests.",
        icon: "spark",
        tile: "violet",
        resources: [
          {
            slug: "coddling",
            title: "The Coddling of the American Mind",
            subtitle: "How Good Intentions and Bad Ideas Are Setting Up a Generation for Failure",
            description: "Challenged me to think about resilience, disagreement, and how institutions and culture can shape the way we respond to difficult ideas.",
            author: "Greg Lucianoff and Jonathan Haidt",
            coverCandidates: ["/books/coddling.jpg"],
          },
        ],
      },
    ],
  },
];

