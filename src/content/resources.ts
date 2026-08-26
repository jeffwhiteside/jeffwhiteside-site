import { type ResourceIconName } from "@/components/resources/resource-icon";
import { type TileColor } from "@/content/leadership";

export interface Resource {
  /** Anchor id on the Resources page (/resources#<slug>). Unique across the whole page, not
   * just within its category. */
  readonly slug: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly author?: string;
  /** "Book" unless set — used for the type badge on the Leadership page's idea-source cards,
   * which look resources up from here rather than duplicating title/author/cover/url. */
  readonly kind?: "Book" | "Research";
  /** Neutral summary of what the work is about. Shown only when the card is expanded. */
  readonly description?: string;
  /** The personal reflection — shown on the collapsed card, the reason a resource is here. */
  readonly whyItMattersToMe?: string;
  /** Specific ideas or practices taken from this work. Shown only when the card is expanded. */
  readonly ideasCarriedForward?: readonly string[];
  /** Where this shows up in the owner's actual work — a project, a decision, a habit. Shown
   * only when the card is expanded. */
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

/** The Resources page's opening blurb. */
export const RESOURCES_INTRO =
"Books, research, and ideas that have shaped how I think about leadership, " +
"engineering, organizations, and the world around me. I capture what I take " +
"from each so I can return to it later and share what has been useful."

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
      "outcomes. ",
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
            description: "Explores how leaders can either amplify or diminish the intelligence, capability, and contribution of the people around them.",
            whyItMattersToMe: "Reinforced my belief that leadership is less about having the answers and more about creating the conditions for others to think, grow, and take meaningful ownership.",
            ideasCarriedForward: [
              "Ask questions before providing answers",
              "Give people meaningful ownership",
              "Create space for others to think and solve",
              "Challenge people beyond what they think they can do",
              "Use people's strengths rather than trying to make everyone the same",
              "Measure leadership by the capability you build in others"
            ],
whereItShowsUpInMyWork:
  "This has shaped how I coach engineers and engineering managers. I try to coach before solving, give leaders real ownership instead of becoming the decision bottleneck, and use questions to help people develop their own judgment. As my organizations grew, this became increasingly important: my impact depended less on the problems I could solve myself and more on the capability and confidence I could build in others.",            
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
            description: "Explores how people develop beyond their starting point through character skills, learning, motivation, coaching, and environments that create opportunities for growth.",
            whyItMattersToMe: "Reinforced my belief that potential should not be judged only by where someone starts. Leaders can help people grow by creating opportunities, providing the right support, encouraging productive discomfort, and recognizing progress along the way.",
            ideasCarriedForward: [
                "Judge potential by growth and trajectory, not just starting ability",
                "Growth often requires getting comfortable with discomfort",
                "Coach toward the future by asking for advice, not only reviewing the past",
                "Use scaffolding to help people grow, then remove it as capability increases",
                "Make progress visible because progress is a powerful source of motivation",
                "Aim for excellence rather than perfection",
                "Treat plateaus as signals to try a different path, not simply push harder",
                "Create opportunities for people to practice skills before they feel fully ready"
              ],
              whereItShowsUpInMyWork: "This shows up most directly in how I develop engineers and engineering managers. I try not to judge people only by what they can already do; I look at how they learn, respond to coaching, take on discomfort, and grow over time. I use increasing levels of ownership as a form of scaffolding, provide support early, and then step back as judgment and confidence develop. It also reinforces my belief that leaders should make progress visible, recognize growth, and create environments where people can safely stretch beyond what they already know.",
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
            description: "Explores how grounded leadership is built through self-awareness, emotional regulation, courage, curiosity, accountability, and the ability to remain open and effective in uncertainty.",
            whyItMattersToMe: "Reinforced my belief that leadership starts with managing yourself well. The ability to stay curious, regulate your reactions, communicate clearly, and remain open when certainty is unavailable creates the foundation for better decisions, stronger relationships, and more trustworthy leadership.",
            ideasCarriedForward: [
              "Resist the urge to reach for certainty where it does not exist",
              "Create space between stimulus and response",
              "Be clear rather than hiding behind politeness",
              "Hold yourself accountable for both your intentions and your impact",
              "Stay curious about why you might be wrong",
              "Use productive urgency to drive impact rather than activity",
              "Build grounded confidence through self-awareness, practice, and humility"
            ],
            whereItShowsUpInMyWork: "This shows up most in how I try to lead through ambiguity, conflict, and change. I work to pause before reacting, ask what I may be missing, and separate confidence from certainty. I also try to communicate expectations more directly, have difficult conversations sooner, and hold myself accountable for the impact of my decisions rather than relying only on good intentions. As a leader, I want to create urgency around outcomes without creating fear, and to remain steady enough that the people around me can focus on solving the problem rather than managing my reaction.",
            coverCandidates: ["/books/strong-ground.jpg"],
            url: "https://www.amazon.com/Strong-Ground-Lessons-Leadership-Tenacity/dp/1984855743/ref=sr_1_1?crid=2IZAIBNURPSFS&dib=eyJ2IjoiMSJ9.z-THlskK9NmUQngg73QALtgmwGh3eEyeZtTk6dFhjPbWFCcim7U5Hry501FYDB4t-_3gY2dZrEesBaUTwOkmc3DfMbELCMnV9pj2qQZBVKr0Cvh2JHq2lB-COoSqQXah3SIGTZ4Wuq4TfAaa9o7m3wefHGN4se9fZG8xJyGlVFE0EQ-_Ev5R3_lPNLlfT35QfMNIb7iWZehbmN_9XOVbRq1EJO_CCxb68d9gIG3IoZw.bjTOocM5DBJtC5lNPQoMNzUA5OTpQk_xjsZ0mQs1Nn4&dib_tag=se&keywords=strong+ground&qid=1787695814&sprefix=strong+ground%2Caps%2C177&sr=8-1",
          },
          {
            slug: "first-break-all-the-rules",
            title: "First Break All The Rules",
            author: "Marcus Buckingham & Curt Coffman",
            whyItMattersToMe: "Reinforced that great leadership isn't about treating everyone the same. People have different strengths, motivations, aspirations, and ways of working. My responsibility is to understand those differences, help people build on what they do best, and create opportunities where they can contribute, grow, and succeed.",
            coverCandidates: ["/books/firstbreakalltherules.jpg"],
            url: "https://www.amazon.com/First-Break-All-Rules-Differently/dp/1595621113/ref=sr_1_1?crid=1UZV95L0X7LIP&dib=eyJ2IjoiMSJ9.z16oCMdycf7bEf4Synq2a4oMRSZGQ2ISAabdAGh7DwNHnoc-zGSLaRbYMCHd9Y2UN2LUNQ6YfBz75OaIxhuOQAUS6iNZ8kAGGvsDjvfBheVJJrDvqOB69a1Km1A5QrHDy94ff6nqSROCHu9M2ibWjp9Yfp2yntA-noEF_zMCFm0etD3dJRKIlZVG2PvhMD9tTrvJy9T7VFOe3dK5OCLqxRLAzsNIV5LDKmtE3t2Sbjc.x3upRVlUo1F9UBhRSMdp31etaQ6P-_6mzkjkBRFLR-o&dib_tag=se&keywords=first+break+all+the+rules&qid=1786507442&sprefix=first+break+a%2Caps%2C200&sr=8-1",
          },
          {
            slug: "trust-and-inspire",
            title: "Trust & Inspire",
            author: "Stephen M. R. Covey",
            whyItMattersToMe: "Reinforced that trust has to be extended, not just earned. Leaders demonstrate trust by giving people real responsibility, autonomy, and the freedom to exercise judgment. Trusting people first creates the opportunity for them to rise to that trust.",
            coverCandidates: ["/books/trustandinspire.jpg"],
            url: "https://www.amazon.com/Trust-Inspire-Leaders-Unleash-Greatness/dp/1982143754/ref=sr_1_1?crid=2QHVN4Z2OIKW4&dib=eyJ2IjoiMSJ9.K_6CtKt3x-qJYhX7oAcqLVaqaLzp6Yvj2XLHQptpShke6Ire7f1DOlN_vrkVNLxVcPk8ZHGAJdGzYBogte2Slt52Jpno399cc_1XcF9HCjP5Y8W16nAPmmkW0H7wiJjbuvFfAu8sM9LlIz1UBlpfVCABuaRfOsv_M0Kd5pEZqdE6_DBbYW7Ba5fXkaQhv-ONv5GEIy1U6h-RTpZxRA6dkr3O8s-35cD_NJvAlOH1Z1o.45saHg8DYwCZKdJnwqHFtQzU0e5gce4PvjbBMVX8nUc&dib_tag=se&keywords=Trust+and+inspire&qid=1786559667&sprefix=trust+and+inspire%2Caps%2C173&sr=8-1",
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
            description: "Explores how trust, safety, and a sense of belonging shape strong organizations, and argues that leaders are responsible for creating environments where people can work together without protecting themselves from one another.",
            whyItMattersToMe: "Reinforced my belief that leadership starts with creating trust and safety. People do their best work when they know their leader has their back, treats them with respect, and puts the health of the team ahead of personal status.",
            ideasCarriedForward: [
              "Create an environment where people feel safe with one another",
              "Extend trust before expecting it in return",
              "Put the needs of the team ahead of leadership status or ego",
              "Treat people as people, not simply resources or output",
              "Build belonging through consistency, relationships, and shared purpose",
              "Accept responsibility for the environment in which the team operates"
            ],
            whereItShowsUpInMyWork:"This shows up in how I try to build relationships and trust with the people I lead. I want people to know that I will support them when things go wrong, give them room to make decisions and mistakes, and address problems without creating a culture of fear. I have found that teams become more accountable, collaborative, and willing to take risks when leaders extend trust first and consistently demonstrate that they have the team's back.",
            coverCandidates: ["/books/leaders-eat-last.jpg"],
            url: "https://www.amazon.com/Leaders-Eat-Last-Together-Others/dp/1591848016/ref=sr_1_1?crid=3Q5WLL18DMMTO&dib=eyJ2IjoiMSJ9.J_PnSxzMprWcl6Xfej4pS_tFSfp74xf24QTUz7WROtuNZL-7y3FSWICJcAjR6A4TUBUOWI_x6MJlV4qsrAygVi3kpP0QDWUbR1y26Y3OpVd0_Tr0Dyx9qI1cKC8IeWF_7LfcGdr89dDppimbC-3png5b6QWQIjWr1lVjJBSByieY0uKIFkW1LqXjKetZ1M92m-F3sRmYO0drDbJkQbUoLf6hDCuEgOJWcfCkMhXlPGg.gG0-yr0aJj1n4pmSwU-k9sn0kALZqEuJwRIOqnF1XDY&dib_tag=se&keywords=leaders+eat+last&qid=1787695328&sprefix=leaders+%2Caps%2C210&sr=8-1",
          },
          {
            slug: "the-culture-code",
            title: "The Culture Code",
            author: "Daniel Coyle",
            description:"Examines how high-performing groups build strong cultures through three reinforcing behaviors: creating safety, sharing vulnerability, and establishing a clear sense of purpose.",
            whyItMattersToMe: "Helped shape how I think about culture as something leaders actively build through everyday behavior. Trust, vulnerability, clear purpose, and consistent signals about what matters create the environment where people can speak honestly, collaborate, and perform at a high level.",
            ideasCarriedForward: [
              "Build safety so people can speak honestly and take risks",
              "Go first with vulnerability to create trust",
              "Use small, consistent behaviors to reinforce belonging",
              "Overcommunicate priorities and purpose",
              "Make it safe to challenge ideas without lowering standards",
              "Use stories and shared experiences to reinforce what the team values"
            ],
             whereItShowsUpInMyWork: "This shows up in how I try to build teams where people can raise concerns, challenge decisions, admit mistakes, and ask for help without fear. I try to model vulnerability myself, listen before providing answers, and communicate priorities repeatedly rather than assuming they are understood. It also influences how I approach failures and retrospectives: problems are opportunities to learn together, not reasons to assign blame. The goal is a culture with both psychological safety and high standards.",
            coverCandidates: ["/books/culturecode.jpg"],
            url: "https://www.amazon.com/Culture-Code-Secrets-Highly-Successful/dp/0804176981/ref=sr_1_1?crid=14VZQM3AWE86W&dib=eyJ2IjoiMSJ9.l4LRxcquvBuu74AHnRbaz50Kb4cenEqdMZzn2ClrBFf9bLSnoNuWQCtPrR6MgZw87h8nOBRULm-FVEtpWN-Ltf7wyhfjKSQa7TjJvFN7FJPbl5pdwR2Lbdt0d8MvSYXUSL7K_EXCN4njGLR4NNOxjw.VBNNiYwHXScAMxlVs_XNxvHCfM6S2ciGPFW8Mv9e5eM&dib_tag=se&keywords=culturecode&qid=1786559886&sprefix=culturecode%2Caps%2C173&sr=8-1",
          },
          {
            slug: "team-of-teams",
            title: "Team of Teams",
            author: "Gen. Stanley McChrystal",
            whyItMattersToMe: "New rules for complex, distributed organizations.",
            coverCandidates: ["/books/teamofteams.jpg"],
            url: "https://www.amazon.com/Team-Teams-Rules-Engagement-Complex/dp/1591847486/ref=sr_1_1?crid=1U9C8WMNS6TDV&dib=eyJ2IjoiMSJ9.tTUYP9et1Ikm6AavQGxm2w2HR-z2N_kFLih1JE7MgqzmeD-lW9FSBpDalzH0aNl8he-GMCRsGxqrgoawRiS0HG9bS0vsjP71bCXcB3xHwY-rcUH0QVLKHakXf9sBnjxmVYjcimp1rSSoazIB7n23hd8hP5hTG7O3jJQCQPkfTX68zT3-rFgtCX2tHHE3izcrsXUgPXUBGsfoMZPY5Q_T1_EfbIK37epDyaJhEXJrBKE.sapzEHUTba55P1Zz99eduXq8JZIJk8g4_5-ucpwCtPM&dib_tag=se&keywords=team+of+teams&qid=1786560044&sprefix=team+of+team%2Caps%2C182&sr=8-1",
          },
          {
            slug: "the-wisdom-of-teams",
            title: "The Wisdom of Teams",
            author: "Jon Katzenbach & Douglas Smith",
            whyItMattersToMe: "Reinforced my belief that great teams are more than collections of talented individuals. Complementary skills, shared purpose, common goals, and mutual accountability turn individual capability into collective performance.",
            coverCandidates: ["/books/wisdomofteams.jpg"],
            url: "https://www.amazon.com/Wisdom-Teams-Creating-High-Performance-Organization/dp/1633691063/ref=sr_1_1?crid=2ZHF12HHEP2KU&dib=eyJ2IjoiMSJ9.K065MMilvV-TkJ-GkwcUiZcgukleZxR6GNn79_CzuSFp5MOY-oE8MtFBTs4m-ccYQ0rjGOdD0j_QOvDQ1PLoo7sTkbgJY_zMtXeqR5NU2YUWWBU3LS8yO_wKmQwtbv5o1RuROgStJRLyv7aTD6m7PI8nH6xhJzR6Fqts5xphN-EIJpLxl1TOUuCHRWKP_Lo3yMByqJSpBAVvcMhj1aUPYCWBzvwIjLy0bJZ_vjFdDbE.VsKqagkgFk0A-pcITXXdthie81-ozyI6grKRMmT25MA&dib_tag=se&keywords=wisdom+of+teams&qid=1786648336&sprefix=wisdom+of+teams%2Caps%2C223&sr=8-1",
          },
          {
            slug: "the-five-dysfunctions-of-a-team",
            title: "The Five Dysfunctions of a Team",
            author: "Patrick Lencioni",
            whyItMattersToMe: "Shaped how I think about trust and productive disagreement. Strong teams don't avoid conflict; they create enough trust to challenge ideas, surface concerns, and debate alternatives without making disagreement personal.",
            coverCandidates: ["/books/fivedysfunctions.jpg"],
            url: "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756/ref=sr_1_1?crid=3FKGC6D7L1K1F&dib=eyJ2IjoiMSJ9.m-S3In8lXHSPxHFwaOT8TcJ8G6brbM9-l-BcdBydItOss61Ebzm15rR34htwURuC1A7PH4A7ba08wgvpJgAFuECn4dqcZTzFtjKVunKya6Gs7b6C4bRqCBIj-G5fJhZMU7UZENdoqie_kpe2phVuPFRrMY5T0TIttpOUoi5DuJBxJoCh_Nt8E-uQ6DDz_Iov-xH2dl0SUGZx1pfy0_ARiCre-kI8oHGtWE2CL8JytEo.by047hVf-mXvnhX9cfdEEYPVSKLBwGdoX06sNLr_I-8&dib_tag=se&keywords=five+dysfunctions+of+a+team&qid=1786653301&sprefix=five+dys%2Caps%2C199&sr=8-1",
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
            description: "Explores how fast, intuitive thinking and slower, deliberate reasoning shape judgment, and how predictable cognitive biases can distort decisions even when we believe we are being rational.",
            whyItMattersToMe: "Deepened my awareness that good judgment requires more than intelligence or experience. We are all vulnerable to bias, overconfidence, and incomplete information, so better decisions often come from slowing down, seeking disconfirming evidence, and building processes that challenge our first instinct.",
            ideasCarriedForward: [
              "Know when intuition is useful and when to slow down",
              "Actively look for information that could prove you wrong",
              "Use the outside view and base rates when making plans",
              "Run pre-mortems to expose hidden risks before committing",
              "Watch for anchoring, loss aversion, and overconfidence",
              "Use decision processes and diverse perspectives to compensate for bias"
            ],
            whereItShowsUpInMyWork: "This shows up in how I approach planning, prioritization, architecture, and leadership decisions. I try to separate what feels obvious from what the evidence actually supports, ask what information may be missing, and invite perspectives that challenge my initial view. In larger decisions, I prefer explicit tradeoffs, risk reviews, pre-mortem thinking, and comparable historical data rather than relying only on confidence or intuition.",
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
          {
            slug: "thinking-in-systems",
            title: "Thinking in Systems",
            author: "Donella H. Meadows",
            whyItMattersToMe: "Shaped how I think about organizations as interconnected systems rather than collections of isolated problems — feedback loops, delays, leverage points, and unintended consequences.",
            coverCandidates: ["/books/thinkinginsystems.jpg"],
            url: "https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557/ref=sr_1_1?crid=3Q3GWMV60TD4V&dib=eyJ2IjoiMSJ9.nGtz7jXKD6bUKvWQAPK-cdviAYN198S_Xfe_tAH9iyGR1zICI9Y_7N9qaWIv3gJzSpX05t1lIzP9tu9nZNBZtuCP1LczYDDCiF3i1OnL6LbWO-i4mvpJKM-fN6mP9-B7W6LzAYsEB9ZJgQhRy8RAi-rmzZvyzKfQUSJPTWBrEvMLvrhz4O6YVHBSFonVJ60_PPULWtS8iiMqQQQ8O0TgSzxil9RAuOub5_t78_LJBfI.VfuoXGSvoEyUQcyLtItZK5i7ZXIg2p-zl89SVvzuAho&dib_tag=se&keywords=thinking+systems&qid=1786660477&sprefix=thinkinginsystems%2Caps%2C167&sr=8-1",
          },
          {
            slug: "the-principles-of-product-development-flow",
            title: "The Principles of Product Development Flow",
            author: "Donald G. Reinertsen",
            whyItMattersToMe: "Influenced how I think about flow, queues, batch size, feedback, and the economics of product development — improving individual activities doesn't necessarily improve the overall outcome.",
            coverCandidates: ["/books/principlesofproductdevelopmentflow.jpg"],
            url: "https://www.amazon.com/Principles-Product-Development-Flow-Generation/dp/1935401033/ref=sr_1_1?crid=RYISOBPKM9G7&dib=eyJ2IjoiMSJ9.1Kp8u7to85q6RJ23sK2PwAj2U3t9OXqMUKhezD2ke2PidCUUVcGUFgZ0ozsEWX4eKnrGQaS5zf3IWiSF2Qq55JW9iaE5d7RAsu4HGnV91QqP9XpP1sX238yVdsKFGFyyJI_2KVPp2qVboQwN4vb5wv9daPyupInSr8TVTeRZY60TE2oDR4tR1RhcDua5o_qAEe2t-vLpe1DpL6RnEI-kGc2-ohaeyJKMtet12loqfWU._m4KadBv0TOPUEXVw-apLMhaK8AIujZCBsjHftFgs-g&dib_tag=se&keywords=principles+of+product+development+flow&qid=1786660792&sprefix=principles+of+product%2Caps%2C195&sr=8-1",
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
          {
            slug: "team-topologies",
            title: "Team Topologies",
            author: "Matthew Skelton & Manuel Pais",
            whyItMattersToMe: "Influenced how I think about designing teams around the work. Team boundaries, ownership, cognitive load, and how teams interact all affect performance — there isn't one ideal structure.",
            coverCandidates: ["/books/teamtopologies.jpg"],
            url: "https://www.amazon.com/Team-Topologies-2nd-Organizing-Technology/dp/1966280009/ref=sr_1_1?crid=20NBUK9FLDYBC&dib=eyJ2IjoiMSJ9.YEfDXTWenoXc04cAXSBXxXi72GK4-OpU9SGntdLoE4KoPqZq1Htfalxc5s_2l5km486fB6ktrX_HfczYrUcEGiJQ4csvwRvXvr_GP0VHrF0UTFglyh5HK9HTrr4nwUPO4cwykg-R6WcoRKR3hP0G0eVAv2aHH2Tq5Zf-J3-Xi7uyyv65rHzRzg5fCN6Iqsuurh53mg3_Qgd0JcMNSg492FjIGetUNxw-EEPA6VEXqhM.x8U3qDQx6qSVC0rCW3JdBRYUy4UDPolPDF3C1M1TE-A&dib_tag=se&keywords=team+topologies&qid=1786653441&sprefix=team+topologies%2Caps%2C177&sr=8-1",
          },
          {
            slug: "accelerate",
            title: "Accelerate",
            author: "Nicole Forsgren, Jez Humble & Gene Kim",
            whyItMattersToMe: "Reinforced these ideas with research from modern software organizations: fast feedback, small changes, automation, continuous delivery, and strong technical practices improve both delivery performance and stability.",
            coverCandidates: ["/books/accelerate.jpg"],
            url: "https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339/ref=sr_1_1?crid=1HHU8DRGPRNV8&dib=eyJ2IjoiMSJ9.IP6dUF35B7QVgMFnqDAo6GZN7nlQCSKhq8Xk-v4rItdQfpTVk_1lqcFejXuRI5azsAzbKFkvXJdOwvEycLE4XOio5bxHAL2g6Y2efiYMvRvVRsBeTyci9Uw5ZgYsLio1lz9lIAoC230-y1puubtyOpxQQPHQcMVMc4BdD2lXtaHiq4CNQD9C3cMR2Vt2p9DlIzdwf6Y82xiMQ-UpszTtBeqrjGtjLe1ppxkZ-advPQo.xVXOR2bxRVPf7W1LRS3hi8Pk0bZ6Nn9k9leOfkvt2hA&dib_tag=se&keywords=accelerate&qid=1786660929&sprefix=accelerat%2Caps%2C226&sr=8-1",
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
          {
            slug: "start-with-why",
            title: "Start with Why",
            author: "Simon Sinek",
            whyItMattersToMe: "Reinforced that people need more than a list of things to do — they need to understand why the work matters. Connecting decisions and priorities to a meaningful purpose creates context and gives people something larger than the task itself to work toward.",
            coverCandidates: ["/books/startwithwhy.jpg"],
            url: "https://www.amazon.com/s?k=start+with+why&crid=1C3WTBRRTJ7CT&sprefix=startwith+%2Caps%2C253&ref=nb_sb_ss_p13n-expert-pd-ops-ranker_ci_hl-bn-left_1_10",
          },
          {
            slug: "built-to-last",
            title: "Built to Last",
            author: "Jim Collins & Jerry Porras",
            whyItMattersToMe: "The concept of BHAGs shaped how I think about ambition. A compelling future should stretch beyond what seems easily achievable today, giving people something meaningful to rally around.",
            coverCandidates: ["/books/builttolast.jpg"],
            url: "https://www.amazon.com/Built-Last-Successful-Visionary-Companies/dp/0060566108/ref=sr_1_1?crid=HHYKMSO39ZVV&dib=eyJ2IjoiMSJ9.nO1HibVit1y3YmhskLbT6YZbUEcUT37evfuorCfekd-W6Su6wQeGXKw9nq7S6T9ImHebazCUTFSwNfC6hh9sR10Gqg3x41GjSoAF_QnDEeV4ng3BKE5CzhmxQp9obrX3zRR9gXNHhnkeUGA4U6hMZryL15ec6bEOqErqRQJOjpID0IRCZKS9cZzQs3k0m7SkALa_ZmLaeN3bptmnR8CcvF0AMP2Fgx4ldhnV42C6UDw.W90X33Hpgi2HxWD_iLK2G5C3x65_cI633BynbVqi4QU&dib_tag=se&keywords=built+to+last&qid=1786644947&sprefix=built+to+last%2Caps%2C185&sr=8-1",
          },
          {
            slug: "measure-what-matters",
            title: "Measure What Matters",
            author: "John Doerr",
            whyItMattersToMe: "Helped shape how I translate ambition into execution. OKRs connect a larger purpose to clear, measurable outcomes, create alignment across teams, and make progress visible.",
            coverCandidates: ["/books/measurewhatmatters.jpg"],
            url: "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221/ref=sr_1_1?crid=F3B56VBXDLW0&dib=eyJ2IjoiMSJ9.fdu3hAVgKrFzpb_aYtBKWVuvmpEX33m9XlCOaqqQ6LJ3oCrpJCEtbl8q1dPvMRKueb_M-xxxCRYJQq0GFyH-MUqZxdTJvIOjLhAj4HmwUsEr9kp0-AK1Zh8kv9OSzZ4CUrKHi1M5jxDPsAUM2dOmFuDYFp7CzfNCwacEy6v982pw5obu_fASr-B7qQczOb8BcvUhtZbo-anbRVEun99-I5dKHbODdQAEkaEPGPobc-M.LtLnc7PJ-ND3Oe3zUWQQCwp0idBDN3N_M3ovr9wT6qs&dib_tag=se&keywords=measure+what+matters+by+john+doerr&qid=1786645107&sprefix=measure%2Caps%2C306&sr=8-1",
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
            kind: "Research",
            whyItMattersToMe: "Foundational research on organizational trust.",
            coverCandidates: [
              "/resources/trust-in-a-manager.jpg",
              "/resources/trust-in-a-manager.png",
              "/books/research.jpg",
            ],
            url: "https://www.makinggood.ac.nz/media/1270/mayeretal_1995_organizationaltrust.pdf",
          },
          {
            slug: "self-determination-theory",
            title: "Self-Determination Theory",
            author: "Deci & Ryan",
            kind: "Research",
            whyItMattersToMe: "Why autonomy, competence, and purpose drive motivation.",
            coverCandidates: ["/books/research.jpg"],
            url: "https://selfdeterminationtheory.org/wp-content/uploads/2020/10/2000_DeciRyan_PIWhatWhy.pdf",
          },
          {
            slug: "the-progress-principle",
            title: "The Progress Principle",
            author: "Teresa Amabile & Steven Kramer",
            kind: "Research",
            whyItMattersToMe: "Small wins build confidence and momentum — visible progress on meaningful work is one of the strongest motivators there is.",
            coverCandidates: ["/books/research.jpg"],
            url: "https://progressprinciple.com/portfolio-items/the-progress-principle-and-the-psychology-of-everyday-work-life/",
          },
          {
            slug: "project-aristotle",
            title: "Project Aristotle",
            author: "Google Research",
            kind: "Research",
            whyItMattersToMe: "Google's research on what makes teams effective: psychological safety, dependability, structure and clarity, meaning, and impact.",
            coverCandidates: ["/books/research.jpg"],
            url: "https://business.google.com/us/think/future-of-marketing/five-dynamics-effective-team/",
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
            description: "Examines how overprotection, emotional reasoning, polarization, and the avoidance of difficult ideas can weaken resilience and productive disagreement, particularly in education and broader culture.",
            whyItMattersToMe: "Challenged me to think more carefully about the difference between safety and comfort. Growth often requires exposure to disagreement, failure, uncertainty, and ideas that challenge what we already believe.",
            ideasCarriedForward: [
              "Do not confuse discomfort with harm",
              "Prepare people to handle challenges rather than removing every challenge",
              "Treat feelings as important information, not unquestionable facts",
              "Seek serious viewpoints that challenge your own assumptions",
              "Build resilience through appropriate struggle and increasing independence",
              "Define groups by shared values and purpose rather than a common enemy"
            ],
            whereItShowsUpInMyWork: "This shows up in how I think about psychological safety, coaching, disagreement, and accountability. I want teams where people are safe to speak honestly and take reasonable risks, but not protected from every difficult conversation, challenge, or failure. I also try to invite opposing views before decisions are made and create an environment where disagreement is treated as a way to improve the thinking rather than as a threat to the relationship.",
            author: "Greg Lucianoff and Jonathan Haidt",
            coverCandidates: ["/books/coddling.jpg"],
          },
        ],
      },
    ],
  },
];

/**
 * Looks up a resource by slug across every group and category — the Leadership page's idea
 * sources reference resources here by slug instead of duplicating title, author, cover, and
 * link, since the same book often anchors both a principle's reflection and a Resources-page
 * entry.
 */
export function findResourceBySlug(slug: string): Resource | null {
  for (const group of RESOURCE_GROUPS) {
    for (const category of group.categories) {
      const resource = category.resources.find((candidate) => candidate.slug === slug);
      if (resource) {
        return resource;
      }
    }
  }
  return null;
}

