import React, { useRef, useState } from 'react'
import { Grid } from '@mui/material'
import { CancelOutlined } from '@mui/icons-material'

import './Events.css'

const events = [
  {
    eventId: 63,
    name: 'Spell Bee',
    description:
      'A spell bee is a competition in which contestants are asked to spell a broad selection of words, usually with a varying degree of difficulty.Spell bee allows participants to compete in a supportive environment. The brain activity and excitement that goes with a spell bee is just as stimulating as physical competition, which means that the whole competition can pump up the adrenaline of the contestants and the audience alike.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/bee_W1IB91p-C.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649626089917',
    coordinators: [
      {
        name: 'Akshaya Mishra',
        mobile: 9455689465,
        email: 'akshayamishra2319@gmail.com',
      },
      {
        name: 'saba Parvez',
        mobile: 8931926306,
        email: 'deparvezsaba16@gmail.com',
      },
      {
        name: 'saba Parvez',
        mobile: 8931926306,
        email: 'deparvezsaba16@gmail.com',
      },
    ],
    rules: [
      'The pronouncer discloses the word to be spelled. He recites gradually and clearly,without altering the regular pronunciation of the word.',
      'The speller listens carefully to the pronouncer and asks for the word to be repeated if necessary.',
      'The speller is given 1 minutes to spell the given word.',
      'When the speller is sure she/he comprehends the word, she/he pronounces it, spells it,and then says the word again. She/he must say it loud enough for the judge to hear it.',
      'The jury determines whether or not the word was spelled correctly.',
      'If the correct spelling was given, the speller stays in the competition.',
      'If the spelling was incorrect, that speller is eliminated from the competition. The judge gives the correct spelling of that word. Then the pronouncer reads a new word to the next participant.',
      'When there are only two spellers left, if one participant misspells a word, the other participant must spell that word correctly, plus one more word to be announced as the winner of the spell bee.',
    ],
    teamType: 'Solo',
    category: 'Literary',
    color2: '#FFE5B5',
    color1: '#E64C1E',
  },
  {
    eventId: 64,
    name: 'Tark-Vitark',
    description:
      'We are presenting Tark-Vitark, a stimulating debate competition as a part of our technical fest “Technovation 2022”. Debates are the vehicles of change in the society as by addressing, dialogue and management but also go the process of understanding, analysing , and acquisition. Do you have what it takes to be the best among the best? Are you the one who is bold and clear, then this is right event for you to participate. Come and get the taste of university level debate.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/debate__SIoGDgSU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649352606612',
    coordinators: [
      {
        name: 'Mansi Singh',
        mobile: 8448312843,
        email: 'Singhmansi343@gmail.com',
      },
      {
        name: 'Sandeep Kumar Maurya',
        mobile: 6388600148,
        email: 'Sk0276200@gmail.com',
      },
    ],
    rules: [
      'Debate will be conducted in two rounds, that are following-',
      'First round()-',
      'Format will be conventional debate. In this round, students will be allowed to participate in a team of two; one speaker for the motion and the other against it.',
      'The topic of this round will be announced at least two days before the date of event.',
      'Only top-10 team will qualify for next round.',
      'Second round()-',
      'In this round, Turncoat debate will be held means participants have to speak first in for the motion then against the motion afterward conclusion .',
      'First round qualified team members have to participate individually in this round.',
      'Topic of this round will be announced at the time of debate.',
      'Rules and Regulations:-',
      'The competition will be bilingual, i.e., participants can speak either in Hindi or English. Mixing of languages will not be permitted.',
      'Participants are requested to kindly maintain the decorum during the event. Misbehave with coordinators, judges, and other participants will not be tolerated anymore.',
      'A confirmation will be sent to the participants a day before the event.',
      'In first round, each participant will be allowed to speak for two minutes. There will be a warning bell after 1 minute 30 seconds notifying the speaker to wind up the motion. Speakers must adhere to given time limit.',
      'In second round, total three minutes will be given to each participants ,one minute for for the motion of the topic ,other one minute for against the motion of the topic, & last one minute for conclusion.',
      'One interjection per participant will be allowed means no cross questions.',
      'The decision of the judges will be final, and binding.Performance will be judged in the following four criteria. Fluency of the speaker. Clarity of thought and topic as well. Ability to use logic and right fact to refute arguments of opponents. Confidence & Body language.',
    ],
    teamType: 'Team',
    category: 'Literary',
    color1: '#AD5D08',
    color2: '#8CBEB2',
  },
  {
    eventId: 65,
    name: 'Jam-Ham',
    description:
      'Jam-ham is an event based on impromptu speaking, where a speaker delivers a speech without any prior rehearsal on the theme. Impromptu, implies “doing something without preparation”. In declamation events, a random issue is given to the speaker on the spot, and the speaker gets barely a few seconds to think over the issue and then speak for about a minute or two regarding that very topic. This type of event is very productive for partakers. According to Jef Menguin (2010, as cited in Tetuko Barry ansyah 2018), the major benefits of an impromptu speaking technique; are that it can enhance the verbal expression of thought, evolve morale in public speaking, unfold thinking promptly on your feet, and build leadership and communication.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/12330050__1__aajT1mi4m.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649614282048',
    coordinators: [
      {
        name: 'Saba Parvez',
        mobile: 8931926306,
        email: 'deparvezsaba16@gmail.com',
      },
      {
        name: 'Shreya Dubey',
        mobile: 7454040994,
        email: 'shreyadubey.iffco37@gmail.com',
      },
    ],
    rules: [
      'Each of the participants will be given an issue on which they will be invited to speak for around 1 to 2 minutes.',
      'After the topic is uncovered, each participant will be given thirty seconds to think about the issue.',
      'Participants will be judged based on the following criteria:',
      'Fluency: the ability to speak with speed, accuracy, and proper expression.',
      'Confidence.',
      'Critical Thinking: the objective analysis and evaluation of an issue in speech.',
      'The pitch of Speech: whether it is too loud or too low like a whisper.',
      'Creativity: How well the issue is addressed in the speech.Ability to be succinct: How clear the sentences are.Audience Awareness.',
      "Hesitation: a momentary pause/tripping over one's word",
      "Repetition: repetition of any word/ phrase again and again. Through repetition of common words like 'and' may not be considered under this except during extreme cases.Deviation: deviation from the subject, grammar, truth, or logic",
      'The participant who will perform well till the end of the allotted time will be awarded +2 points',
    ],
    teamType: 'Solo',
    category: 'Literary',
    color2: '#FDC78C',
    color1: '#7B411C',
  },
  {
    eventId: 66,
    name: "Writer's Saga",
    teamType: 'Solo',
    description:
      "Let the flow of your pen be a testament to your skills, prove your writing skills by describing what has never been said before. Introducing Writer's Saga - An Article/Blog Writing Competition for Literary enthusiasts to work out their brains.",
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/writer_5LM8Hs-Zu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649352608328',
    coordinators: [
      {
        name: 'Nityam Upadhyay',
        mobile: 9696766400,
        email: 'nityamupadhyay@gmail.com',
      },
      {
        name: 'Pratiksha Tripathi',
        mobile: 9839325123,
        email: 'pratiksha1112.pt@gmail.com',
      },
    ],
    rules: [
      'Participants will be given a What If question each and they will have to write their thoughts on it. For example, What if everyone in the world knew what you were thinking?.',
      'The questions posed to each candidate will be different and would be handed out to them in a random manner.',
      'Participants will be provided with proper writing materials during the time of the event.',
      'The write-up should at least be of 300-350 words.A participant can submit her/his work only once.Participants will be given 90 minutes to submit their writings.',
      'Participants will not be allowed to carry any sort of electronic gadgets as doing so would lead to their immediate disqualification.',
      'Participants will have to ensure that their submissions are entirely their own and plagiarism of any sort would lead to their immediate disqualification.',
    ],
    category: 'Literary',
    color2: '#C54B3B',
    color1: '#6AC7E7',
  },
  {
    eventId: 68,
    name: 'Ramayana Quiz',
    teamType: 'Solo',
    description:
      'सिया राममय सब जग जानी, करहू प्रणाम जोरीजुग पानि ।हरि अनंत हरि कथा अनंता, कहहीं सुनहिं बहुबिधिसब संता।ग्रंथराज रामायण के ज्ञान का बोध कराने हेतु एकसुन्दर प्रयास ।',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/ram_AQhWp0fS9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649620677490',
    coordinators: [
      {
        name: 'Manaswi Shukla',
        mobile: 8303787302,
        email: 'manaswivns501@gmail.com',
      },
      {
        name: 'Praveen Tiwari',
        mobile: 9838733810,
        email: 'test@test.test',
      },
    ],
    rules: [
      'Every participant will get a question paper consisting of 40 questions(30 MCQ 10 ONE WORD)',
      'The maximum time duration is 25 minutes.',
      'No mobile, phones, books, copies, pages, or any other printed or written material is allowed, as this material will be treated under UFM.',
      'All the participants are requested to behave properly and maintain the decorum of the event as if misbehavior came across will result in participant disqualification.',
      'The decision of the coordinators shall be final and no query will be entertained thereafter.',
    ],
    category: 'Literary',
    color2: '#FF6600',
    color1: '#000000',
  },
  {
    eventId: 69,
    name: 'Kavyanical',
    teamType: 'Solo',
    description:
      'Poetry, literature that invokes a concentrated imaginative awareness of experience or a specific emotional response through language chosen and arrange its meaning, sound and rhythm.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/poetry_quR6Gh5Uv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649626999171',
    coordinators: [
      {
        name: 'Harsh Pratap Singh',
        mobile: 6387980264,
        email: 'singhharshpratap08@gmail.com',
      },
      {
        name: 'Nishkarsh chandra',
        mobile: 8081526990,
        email: 'nishkarsh2105@gmail.com',
      },
    ],
    rules: [
      'A poem should be in only 2 languages ( Hindi / English ) ',
      'A poem should not be too long ( 3-5 min. Only ) ',
      'A poem should not have obscene language. ',
      'A poem should be original. Plagiarism of any short would lead to disqualification. ',
      'Disqualified candidates can not be allowed again. ',
      'The judge will make the final decision for unfair means',
    ],
    category: 'Literary',
    color2: '#6F4EC5',
    color1: '#FF8C85',
  },
  {
    eventId: 70,
    name: 'Story Teller',
    teamType: 'Solo',
    description:
      'Storytelling is relating a tale to one or more listener through voice and gesture .It is not the same as reding a story aloud or reciting a piece from memory or acting out a drama - though it shares common characteristics with these arts. The storyteller looks into the eyes of audience and together they compose the tale.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/3583238_MrZznTunR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649616860128',
    coordinators: [
      {
        name: 'Shreya Singh',
        mobile: 8303604710,
        email: 'dfs@jsdnj.ckkdn',
      },
      {
        name: 'Saptrishi Mishra',
        mobile: 9304481439,
        email: 'dfs@jsdnj.ckkdn',
      },
      {
        name: 'Abhishek Singh',
        mobile: 8417087214,
        email: 'dfs@jsdnj.ckkdn',
      },
    ],
    rules: [
      'An impromptu topic will be given by the coordinators five minutes before the commencement of the event.',
      'Each participants is given 1.5min minimum & 3min maximum to tell the story to the audience. ',
      'The Topic will be given to each candidate by the lottery system to ensure that there will be no biasing.',
      'The language in which participants are comfortable can use Hindi/English.  ',
      'Evaluation of the story will depend on many points like the selection of words, the moral of the story, the way of representation, the body language of the candidate, and also depends on the audience how to engage with the candidate’s story. ',
      'It is expected that candidate should be present at a given time otherwise his/her will be disqualified. ',
      'In case of any discrepancy, the coordinators have full authority to disqualify the candidate. ',
      'In case there will be an entry fee it will be decided by the higher authorities as stated by the Chief coordinators',
    ],
    category: 'Literary',
    color2: '#90345A',
    color1: '#012A43',
  },
  {
    eventId: 67,
    name: 'QuillZest',
    description:
      'Let the ink from your quill flow and describe the beauty and wonders of our world, let your imagination run wild and visualize. Introducing Quill-Zest a Pictorial Theme based writing event to test the skills of ambitious writers such as yourself.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/6463400_NyllbzEJz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649617441010',
    coordinators: [
      {
        name: 'Nityam Upadhyay',
        mobile: 9696766400,
        email: 'nityamupadhyay@gmail.com',
      },
      {
        name: 'Gaurav Rai',
        mobile: 7985738979,
        email: 'raigaurav2207@gmail.com',
      },
    ],
    rules: [
      'All the participants will be given a set of image based themes on which they will have to write.',
      'Participants can write quotation, poems or micro-fiction/prose either in English or in Hindi.',
      'A Participant can only submit one Entry.Participants will be given 90 minutes to submit their writings.',
      'Participants are not allowed to carry any kind of electronic gadget as it would lead to immediate disqualification.',
      'Participants should ensure that there submission are their own work as plagrism would lead to immediate disqualification.',
    ],
    teamType: 'Solo',
    category: 'Literary',
    color2: '#FF745C',
    color1: '#385B62',
  },
  {
    eventId: 42,
    name: 'BGMI',
    teamType: 'Solo/Team',
    description:
      'BGMI is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people. The last person or team alive wins the match',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/Pubg_NoN14zKJK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649267023397',
    coordinators: [
      {
        name: 'Faizan Anwar',
        mobile: 8737826121,
        email: 'dfs@jsdnj.ckkdn',
      },
      {
        name: 'Shubhanshu Srivastava ',
        mobile: 9554392144,
        email: 'kayasthashubhanshu50@gmail.com',
      },
    ],
    rules: [
      'Players must register their teams on the given Link.',
      'Only the registered players can play in the tournament. (If any other player is caught playing, then the team will be disqualified.)',
      'Each Team must maintain, during the tournament exactly four players which is the minimum and the maximum number of players allowed.',
      'Each team must select its captain who shall be responsible for communications with the officials of the tournament. A team cannot change the team captain during the tournament without prior approval of the tournament officials',
      'Players must not use an emulator to play on a PC or other device that is not a handheld device.',
      'To begin with, BGMI players with a level of 25.',
      'No one allows playing with a new ID.',
    ],
    category: 'Gaming',
    color2: '#1D1C1A',
    color1: '#FE8D1B',
  },
  {
    eventId: 43,
    name: 'Human Ludo',
    teamType: 'Team',
    description:
      'Human Ludo is a strategy board to 4 game for 2 players, in which the players race their four tokens(players themselves are their respective colour tokens) from start to finish according to the rolls of a single die.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/4498257_zDQnembwhu.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649267009373',
    coordinators: [
      {
        name: 'DEEKSHA MAURYA',
        mobile: 6390083371,
        email: 'Deekshabrh0052@gmail.com',
      },
      { name: 'sh', mobile: 25522, email: 'dfs@jsdnj.ckkdn' },
    ],
    rules: [
      'The rules are same as of normal ludo.',
      ' Upto quater final and semi final the game will be conducted as normal board ludo (ofline mode or online mode).',
      ' In final match the game will be conducted as human ludo where physically humans will replace the tokens.',
      ' Props provided - All necessary things required will be provided.',
    ],
    category: 'Gaming',
    color2: '#393D4E',
    color1: '#00CFC2',
  },
  {
    eventId: 44,
    name: 'Call of Duty Mobile',
    teamType: 'Team',
    description:
      "Multiplayer is at the core of COD Mobile, and you'll be able to join up with friends to play in teams. Play battle royale or multiplayer with B;ackout style.",
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/cod-mobile-redeem-codes-1_RUFDV6Msx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649395715723',
    coordinators: [
      {
        name: 'Abhinendra Singh Gautam',
        mobile: 7388481299,
        email: 'abhinendragautam17@gmail.com',
      },
      {
        name: 'Pawan Prajapati',
        mobile: 9621217692,
        email: 'pleasedonotsearch3@gmail.com',
      },
    ],
    rules: [
      'The usage of ‘jailbroken’ or ‘rooted’ devices in tournament matches is not permitted.',
      'The usage of cheats, hacks, or any other third-party applications that give you an unfair advantage over your opponents will result in immediate disqualification of the team.',
      'Teams that attempt to use players which are not registered in their team may be disqualified.',
      'All players must remain in the game’s lobby following the conclusion of each match. This allows us to view their final score on the scoreboard. ',
      'Once the match has started, only the players that are in the lobby are eligible to play. In the case of a player disconnecting and is not able to join back, a team is allowed to have a registered player on their team to substitute. This is allowed only once per match.',
      'Abusing in-game glitches that give a team an unfair advantage is not permitted. Teams caught doing so may be disqualified.',
      'Depending on a mode of the match, rules may apply, such as banned items.',
    ],
    category: 'Gaming',
    color2: '#222925',
    color1: '#8C9588',
  },
  {
    eventId: 45,
    name: 'Counter Strike',
    teamType: 'Team',
    description:
      ': Counter-Strike: Global Offensive, widely  known as CS:GO, is a competitive first-person shooting game. Two teams compete in multiple rounds of objective-based game modes with the goal of winning enough rounds to win the match. CS:GO was released on Windows, OS X, Xbox 360 and Playstation 3, but all professionals play the game on PC.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/cs-go_fhDe3fQui.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649619779764',
    coordinators: [
      {
        name: 'Shubham Pal',
        mobile: 9118736191,
        email: 'shubhamr2520@gmail.com',
      },
      {
        name: 'sh',
        mobile: 25522,
        email: 'dfs@jsdnj.ckkdn',
      },
    ],
    rules: [
      'The game pits two teams of five players against each other, with each team having to complete certain objectives to win.',
      'One team takes on the role of the Terrorists (Ts), while the other team is the Counter-Terrorists (CTs).',
      'In this mode, the attacking Ts must plant and detonate a bomb in a specific location - site A or B - or take out all five of the CTs to win around.',
      'The CTs must defuse the bomb when it is planted, or take out all five of the Ts to win the round.',
      'Each match comprises 30 rounds in total, with rounds lasting a maximum of one minute and 55 seconds. The first team to win 16 rounds wins the match.',
    ],
    category: 'Gaming',
    color2: '#693C00',
    color1: '#03356B',
  },
  {
    eventId: 50,
    name: 'Dart',
    teamType: 'Solo',
    description:
      'Darts is a throwing game in which small missiles are thrown at a target, which is called a dartboard.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/shutterstock_757814905_meEe2-SMQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649620979536',
    coordinators: [
      {
        name: 'Ashwini Kumar Ray',
        mobile: 6201784183,
        email: 'ashwiniraynew@gmail.com',
      },
      {
        name: 'Arpita',
        mobile: 9076771775,
        email: 'guptaarpita159@gmail.com',
      },
      {
        name: 'Pragati Tiwari ',
        mobile: 8840953334,
        email: 'tw.pragati17@gmail.com',
      },
    ],
    rules: [
      'Each of the players is provided with 3 darts.',
      'Now each of the players has to hit these three darts on the dartboard🎯.',
      'The player who will concede 301 points first will be appointed as the winner.',
    ],
    category: 'Gaming',
    color2: '#BB0101',
    color1: '#000000',
  },
  {
    eventId: 51,
    name: 'Arm Wresling',
    teamType: 'Solo',
    description:
      'A test of strength of one person’s arm against another it consists of two people who stand at or sit down at a table and then grip each others hand whilst placing their elbows on the table.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/arm-wrestling_r66NAbDDgA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649622789328',
    coordinators: [
      {
        name: 'Vishal Richariya ',
        mobile: 8303777197,
        email: 'panditvishal979@gmail.com',
      },
      {
        name: 'panditvishal979@gmail.com',
        mobile: 6394634076,
        email: 'manyu0623@gmail.com',
      },
    ],
    rules: [
      'Two referees manage each match. Each of them is located on the opposite side. This way, the officials can judge the competitors and notice their grip from both sides.',
      'The matches have no specified time limit, but the referee may call a halt to the match if one or both the competitors are, in his opinion not in a state to carry on.',
      "The competitors have to approach the table before starting the match and make themselves comfortable. Afterwards, they should proceed to grip their opponent's hand. The players must carefully make the grip through joining their palm to palm, with the thumb knuckle visible to the referee. ",
      "It is also required that the competitors' other hand should grip their respective hand peg.",
      "Competitors can choose to start a match in the referee's grip or a strip, but care is taken as, both the competitors must agree to this.",
      "Once the referees are happy with the gripping from both the competitors, the match is allowed to begin. Each competitor attempts to pin his/her opponent's arm onto the touchpad to score a point.",
      "The applied pressure should be in a sideways capacity to force their opponent's hand to the touchpad. The participants cannot apply backpressure to drag the opponent off towards the center of the table.",
      "The match is won by the competitor who pins their opponent's hand onto the touchpad. At this moment, if the head referee is satisfied with a valid pin; he/she will shout 'stop!' and indicate their victory by instantly raising his/her arm.",
      "Any pin is only counted as valid when any part of the competitor's natural wrist touches the touchpad.",
      "Arm-wrestling matches have numerous types of fouls such as touching any part of your own body during the match, crossing the shoulder into the opposition's area, dropping the shoulder below the height of the touchpad, foul language, abuse or poor sportsmanship, etc.",
      'Two warnings are equal to one foul and two foul equals a disqualification which results in an an immediate winning situation for the opposite player in a match.',
    ],
    category: 'Gaming',
    color2: '#BB0101',
    color1: '#000000',
  },
  {
    eventId: 52,
    name: 'Tekken',
    description:
      ' Tekken is a fighting PC game in which two players fight against each other for 3 rounds. The player who will be winning the majority of rounds will be considered as a winner. Players can choose their favourite character in the beginning of the game.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/tekken-7-3840x2160-heihachi-akuma-ps4-xbox-5k-868_unEReaO0J.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649397859043',
    coordinators: [
      {
        name: 'Manish Singh',
        mobile: 8896068523,
        email: 'manish.s15j@gmail.com',
      },
      {
        name: 'Shubham Pal',
        mobile: 9118736191,
        email: 'shubhamr2520@gmail.com',
      },
    ],
    teamType: 'Solo',
    rules: [
      'At the beginning of the game, players will be given some time to choose their game character. ',
      'There will be 3 rounds and the player winning the maximum rounds will be considered the winner.',
      'Players are advised to gently press the keyboard buttons. ',
      'Players can bring their opponents for the match.',
    ],
    category: 'Gaming',
    color2: '#A22A49',
    color1: '#2A307B',
  },
  {
    eventId: 54,
    name: 'Paper Fold Dance',
    teamType: 'Solo',
    description:
      '- It is a competition where participants in a group dance on a piece of paper until the music stops. The paper is folded in every stopso it gets smaller and smaller with the proceeding rounds.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/dance_ruMA6KANX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649624471540',
    coordinators: [
      {
        name: 'Aarya Pal ',
        mobile: 7905452083,
        email: 'palaarya1999@gmail.com',
      },
      {
        name: 'Shubham Jain ',
        mobile: 8303800861,
        email: 'jshubham.official@gmail.com',
      },
    ],
    rules: [
      'Everyone needs to stand at the given dance paper area, in every 2 minutes the music will stop and the dancing paper area will be shortened ',
      'Every participant needs to dance on the paper, one touching the area outside the paper will be immediately disqualified. ',
      'The event will be conducted in two rounds: Knockout and Final Round. ',
      'The participants will be divided into equal ten groups depending on the number of participants, and the top performer from each group will be qualified for the final round. ',
      'In the final round, all the winners of knockout rounds will compete in pairs till we get one winner.',
    ],
    category: 'Gaming',
    color2: '#FEFD06',
    color1: '#090909',
  },
  {
    eventId: 56,
    name: 'Blind Date',
    teamType: 'Solo',
    description:
      'It’s an event in which participants will get to know a random person by playing some games and doing some certain tasks together. Also they will learn to communicate with someone they have never known.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/blind_date_BA8AqepdA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649267002594',
    coordinators: [
      {
        name: 'Rohit Kumar',
        mobile: 6387540764,
        email: 'rkflash22@gmail.com',
      },
      {
        name: 'Abhishek Maurya',
        mobile: 7084459038,
        email: 'abhishekmaurya.official@gmail.com',
      },
      {
        name: 'Aarya Pal',
        mobile: 7905452083,
        email: 'palaarya1999@gmail.com',
      },
      {
        name: 'Madhav Shyam Dubey',
        mobile: 8740849130,
        email: 'manisdubey2001@gmail.com',
      },
    ],
    rules: [
      'A named pair will be selected randomly from a lot of names  ',
      'Each pair have to perform certain tasks or play a few games  ',
      'Each task/game is to be in the form of elimination i.e few of the pairs will be eliminated on each level. ',
    ],
    category: 'Gaming',
    color2: '#FEFD06',
    color1: '#DBFAC8',
  },
  {
    eventId: 59,
    name: 'Futsal',
    teamType: 'Team(7)',
    description:
      'It is a short version of Soccer the only difference is that it restricts the height play with the ball on a small playground.',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/Futsal_LldIBKmas.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649438623993',
    coordinators: [
      {
        name: 'Anirudh Kumar ',
        mobile: 8979388624,
        email: 'anirudhk1577@gmail.com',
      },
      {
        name: 'Abhimanyu Singh ',
        mobile: 6394634076,
        email: 'manyu0623@gmail.com',
      },
      {
        name: 'Pawan Prajapati ',
        mobile: 9621217692,
        email: 'pleasedonotsearch3@gmail.com ',
      },
    ],
    rules: [
      'Maximum no. of players will be 7(5 playing and 2 Substitutes).',
      'No player is allowed to particularly stick all of the time as goal keeper throughout the play.',
      'No hand saves are allowed.',
      'Goal height is below knee.',
      'The game will be of 2 halves 15 min each.',
      "In case, if the match is tied in 30 mins of play then there will be extra time of 5 mins and if still the score is tied then 3 penalty will be offered to both the teams and then sudden death if it isn't settled after penalties. ",
      'There will be no warmup time given, the tournament match will be started as per the time mentioned in schedule which will be provided later.',
    ],
    category: 'Gaming',
    color1: '#E16A47',
    color2: '#EDDDBE',
  },
  {
    eventId: 60,
    name: 'Mix Cricket',
    teamType: 'Team(6B/5G)',
    description:
      'As you know Cricket is a Gentlemen’s game which even brings Enemies together. Most of us are crazy about IPL now a days… so here we bring a smaller, similar and joyful version of IPL which makes us crazy ... In this version of cricket, we bring both boys and girls together as a team which makes playing this game even more cheerful and thrilling… Let’s come together and be a part of our jubilant event… ',
    image:
      'https://ik.imagekit.io/v7f424mhzsk/Technovation_2k22/mix_cricket_0TH_c5MYa.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649440948595',
    coordinators: [
      {
        name: 'Garima Singh',
        mobile: 9936513756,
        email: 'dfs@jsdnj.ckkdn',
      },
      {
        name: 'Diksha Maurya',
        mobile: 6390083371,
        email: 'dfs@jsdnj.ckkdn',
      },
      {
        name: 'Shivaji Singh',
        mobile: 6388643755,
        email: 'shivasingh18734@gmail.com',
      },
      {
        name: 'Divyanshu Singh',
        mobile: 9839221142,
        email: 'dfs@jsdnj.ckkdn',
      },
      {
        name: 'Aryan Kumar',
        mobile: 8005350800,
        email: 'dfs@jsdnj.ckkdn',
      },
    ],
    rules: [
      'No. of team players- 11 players (6 boys/5 girls)',
      'Boys will play from their non-dominant hands.',
      'Reverse sweep will be ban for boys if it happens dot ballwill be given.',
      'Fielding will be done by 9 players and after every twoovers players should be changed.',
      'Minimum 4 girls should be present on ground.',
      'No. of overs per match:',
      '*Before semis- 6 overs (2 overs powerplay)',
      '*Semifinal and final- 8 overs (3 overs powerplay)',
      'In powerplay maximum 3 players allowed outside thecircle.',
      'Bowling- Girls will have bowl half of the total overs.',
      'Batting- One girl and one boy should be present duringbatting.',
      'Rules for boundary:',
      'If the ball hits boundary tree, then the decision willdepend upon declination of the ball and umpire willtake final decision.',
      'If the ball gets caught after being hit from anyobstacle, then not out will be given for that.',
      '2 runs will be rewarded for every hit behind thestumps if the ball crosses the boundary.',
      '*Other cricket rules are same except lbw.',
    ],
    category: 'Gaming',
    color2: '#E6CB98',
    color1: '#7EC7E1',
  },
]

function Events({ classes }) {
  const eventRef = useRef()

  const [currentEvent, setCurrentEvent] = useState()

  const triggerEventDetails = (i) => {
    if (i >= 0) {
      setCurrentEvent(events[i])
    } else {
      setCurrentEvent(null)
    }
  }

  return (
    <>
      <Grid container spacing={0} className="grid cs-style-4">
        {events.map((event, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} className="eventCont" key={i}>
            <figure>
              <div className="img" onClick={() => triggerEventDetails(i)}>
                <img src={event.image} alt={event.name} />
              </div>
              <figcaption>
                <div className="label">
                  <h3 className="heading">{event.name}</h3>
                  <p className="heading">{event.category}</p>
                </div>
                <div className="openBtn" onClick={() => triggerEventDetails(i)}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 129 129"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    enableBackground="new 0 0 129 129"
                    height="20px"
                    width="20px"
                    fill="white"
                  >
                    <g>
                      <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
                    </g>
                  </svg>
                </div>
              </figcaption>
            </figure>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        className={`eventInfoTab ${currentEvent ? 'ng-enter' : 'ng-leave'}`}
        ref={eventRef}
      >
        {currentEvent ? (
          <>
            <div className="closeBtn" onClick={triggerEventDetails}>
              <CancelOutlined
                fontSize="large"
                style={{ color: currentEvent.color1 }}
              />
            </div>

            <Grid item xs={12} sm={12} md={12} id="phone-eventHeadingCont">
              <div
                className="eventHeading"
                style={{ backgroundColor: currentEvent.color2, height: 'auto' }}
              >
                <h1 id="eventHeading">{currentEvent.name}</h1>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              className="event-leftPane"
              id="event-leftPane"
              style={{ backgroundColor: currentEvent.color1 }}
            >
              <img
                className="eventImg"
                src={currentEvent.image}
                alt={currentEvent.name}
              />

              {currentEvent.coordinators.map((c, i) => (
                <div className="coordiantor" key={i}>
                  <p>
                    Event Co-ordinator :<br /> {c.name}
                  </p>

                  <p>
                    Phone :<br /> +91 {c.mobile}
                  </p>
                  <p>
                    Email :<br /> {c.email}
                  </p>
                  <a href={`mailto: ${c.email}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 31.012 31.012"
                      style={{ enableBackground: 'new 0 0 31.012 31.012' }}
                      xmlSpace="preserve"
                      width="512px"
                      height="512px"
                    >
                      <g>
                        <g>
                          <path
                            d="M25.109,21.51c-0.123,0-0.246-0.045-0.342-0.136l-5.754-5.398c-0.201-0.188-0.211-0.505-0.022-0.706    c0.189-0.203,0.504-0.212,0.707-0.022l5.754,5.398c0.201,0.188,0.211,0.505,0.022,0.706C25.375,21.457,25.243,21.51,25.109,21.51z    "
                            fill="#FFFFFF"
                          />
                          <path
                            d="M5.902,21.51c-0.133,0-0.266-0.053-0.365-0.158c-0.189-0.201-0.179-0.518,0.022-0.706l5.756-5.398    c0.202-0.188,0.519-0.18,0.707,0.022c0.189,0.201,0.179,0.518-0.022,0.706l-5.756,5.398C6.148,21.465,6.025,21.51,5.902,21.51z"
                            fill="#FFFFFF"
                          />
                        </g>
                        <path
                          d="M28.512,26.529H2.5c-1.378,0-2.5-1.121-2.5-2.5V6.982c0-1.379,1.122-2.5,2.5-2.5h26.012c1.378,0,2.5,1.121,2.5,2.5v17.047   C31.012,25.408,29.89,26.529,28.512,26.529z M2.5,5.482c-0.827,0-1.5,0.673-1.5,1.5v17.047c0,0.827,0.673,1.5,1.5,1.5h26.012   c0.827,0,1.5-0.673,1.5-1.5V6.982c0-0.827-0.673-1.5-1.5-1.5H2.5z"
                          fill="#FFFFFF"
                        />
                        <path
                          d="M15.506,18.018c-0.665,0-1.33-0.221-1.836-0.662L0.83,6.155C0.622,5.974,0.6,5.658,0.781,5.449   c0.183-0.208,0.498-0.227,0.706-0.048l12.84,11.2c0.639,0.557,1.719,0.557,2.357,0L29.508,5.419   c0.207-0.181,0.522-0.161,0.706,0.048c0.181,0.209,0.16,0.524-0.048,0.706L17.342,17.355   C16.835,17.797,16.171,18.018,15.506,18.018z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              ))}
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <div
                className="eventHeading"
                id="eventHeadingCont"
                style={{ backgroundColor: currentEvent.color2 }}
              >
                <h1 id="eventHeading">{currentEvent.name}</h1>
                <h2
                  className="subHeading"
                  style={{ backgroundColor: currentEvent.color1 }}
                >
                  {currentEvent.category}
                </h2>
              </div>

              <div className="event-rules" id="event-rules">
                {currentEvent.rules.map((rule, i) => (
                  <ul key={i}>
                    <li>{rule}</li>
                  </ul>
                ))}
              </div>
            </Grid>
          </>
        ) : null}
      </Grid>
    </>
  )
}

export default Events
