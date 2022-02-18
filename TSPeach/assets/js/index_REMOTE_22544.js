four=['also', 'away', 'baby', 'back', 'bear', 'book', 'came', 'crow', 'best', 'bird', 'blue', 'boat', 'both', 'does', 'down', 'food', 'gone', 'good', 'into', 'more', 'nose', 'read', 'come', 'have', 'just', 'know', 'like', 'make', 'eggs', 'farm', 'find', 'four', 'from', 'home', 'call', 'card', 'cold', 'dead', 'done', 'door', 'draw', 'want', 'some', 'that', 'them', 'then', 'they', 'this', 'time', 'well', 'what', 'when', 'with', 'your', 'were', 'sure', 'will', 'five', 'mean', 'need', 'last', 'said', 'face', 'fall', 'look', 'made', 'nest', 'once', 'over', 'rice', 'road', 'fast', 'feel', 'feet', 'fell', 'fine', 'fire', 'foot', 'free', 'full', 'game', 'girl', 'give', 'hand', 'hard', 'here', 'take', 'work', 'much', 'kind', 'tell', 'okay', 'week', 'only', 'next', 'went', 'head', 'help', 'sore', 'told', 'took', 'tree', 'turn', 'very', 'wolf', 'high', 'hold', 'hurt', 'idea', 'left', 'line', 'long', 'lost', 'year', 'nice', 'care', 'guys', 'half', 'been', 'than', 'stay', 'many', 'mine', 'move', 'name', 'nine', 'open', 'goes', 'gosh', 'cute', 'else', 'play', 'damn', 'part', 'pass', 'pick', 'pink', 'pull', 'push', 'rain', 'real', 'rest', 'same', 'show', 'side', 'love', 'used', 'ever', 'deal', 'hell', 'miss', 'snow', 'soft', 'soon', 'stop', 'talk', 'tall', 'tape', 'yeah', 'hair', 'neat', 'quit', 'Erin', 'Greg', 'mhmm', 'wait', 'walk', 'wash', 'wind', 'wear', 'Hurt', 'Lost', 'Down', 'Glad', 'Calm', 'Cozy', 'Safe'];
five=['about', 'after', 'asked', 'birds', 'cabin', 'child', 'could', 'again', 'break', 'dirty', 'going', 'juice', 'light', 'night', 'other', 'there', 'black', 'bring', 'broke', 'first', 'found', 'horse', 'house', 'brown', 'carry', 'chair', 'clean', 'close', 'color', 'crazy', 'drive', 'eight', 'write', 'right', 'think', 'those', 'would', 'stuff', 'every', 'muddy', 'floor', 'flood', 'fruit', 'funny', 'glass', 'green', 'happy', 'three', 'tough', 'doing', 'class', 'where', 'thing', 'hello', 'sides', 'their', 'wants', 'water', 'wheel', 'white', 'later', 'lunch', 'still', 'today', 'seven', 'might', 'hours', 'guess', 'leave', 'money', 'month', 'mouth', 'music', 'never', 'nurse', 'maybe', 'phone', 'these', 'forty', 'comes', 'paper', 'party', 'place', 'quiet', 'radio', 'ready', 'short', 'silly', 'heard', 'until', 'great', 'check', 'sorry', 'stand', 'store', 'table', 'teach', 'thank', 'train', 'study', 'watch', 'whole', 'bucks', 'girls', 'small', 'alone', 'Jacob', 'gonna', 'under', 'which', 'wrong', 'while', 'years', 'cause', 'Sorry', 'Awful', 'Jolly', 'Silly', 'Happy', 'Proud', 'Great', 'Loved', 'Giddy', 'Tense', 'Timid', 'among', 'piece'];
six=['around', 'before', 'called', 'afraid', 'always', 'animal', 'behind', 'better', 'little', 'myself', 'pretty', 'broken', 'change', 'coffee', 'dinner', 'really', 'enough', 'mother', 'people', 'robins', 'safely', 'school', 'second', 'father', 'finish', 'forget', 'friend', 'should', 'thirty', 'social', 'wanted', 'inside', 'listen', 'Friday', 'Monday', 'thanks', 'things', 'eleven', 'opener', 'please', 'sister', 'either', 'twenty', 'street', 'summer', 'eighty', 'making', 'spring', 'Sunday', 'Jerard', 'Travis', 'Trevor', 'yellow', 'Lonely', 'Bubbly', 'Joyful', 'Strong', 'Uneasy', 'arrive', 'course', 'cousin', 'decide', 'future', 'planet', 'surely', 'theyre', 'aerial', 'asthma'];
seven=['animals', 'because', 'chapter', 'another', 'believe', 'English', 'flowers', 'friends', 'hundred', 'brother', 'outside', 'reading', 'glasses', 'thought', 'getting', 'started', 'studies', 'alright', 'morning', 'nothing', 'tonight', 'already', 'anybody', 'picture', 'present', 'kidding', 'minutes', 'weekend', 'married', 'through', 'watched', 'working', 'Atlanta', 'playing', 'Tuesday', 'Ashamed', 'Tickled', 'Excited', 'Content', 'Pleased', 'Playful', 'Relaxed', 'Anxious', 'Worried', 'Crushed', 'Unloved', 'America', 'evening', 'finally', 'problem', 'receive', 'several', 'special', 'suppose', 'usually', 'abstain', 'amateur', 'amnesty', 'anxious', 'apology', 'archaic', 'asphalt', 'awkward', 'berserk'];

const caption_div = document.getElementById('caption-div');
const sen_box = document.getElementById('sentance-box');
const stop_button = document.getElementById("stop-button");

const buttonEl = document.getElementById('reading-button');
const messageEl = document.getElementById('feedback');

var chosen_words = [];
// set initial state of application variables
let isRecording = false;
let socket;
let recorder;

// runs real-time transcription and handles global variables
const run = async () => {

  if (isRecording) { 
    buttonEl.innerText="Begin Reading";
    
    if (socket) {
      socket.send(JSON.stringify({terminate_session: true}));
      socket.close();
      socket = null;
    }

    if (recorder) {
      recorder.stopRecording();
      recorder = null;
    }
  } else {
    sen_box.innerHTML = "";
    caption_div.style.width = 'fit-content';
    messageEl.innerText="Feedback Will Appear Here";
    buttonEl.innerText="Waiting for Assembly AI";
    const response = await fetch('http://localhost:8000'); // get temp session token from server.js (backend)
    const data = await response.json();

    if(data.error){
      alert(data.error)
    }

    const { token } = await data;

    // establish wss with AssemblyAI (AAI) at 16000 sample rate
    socket = await new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

    // handle incoming messages to display transcription to the DOM
    const texts = {};
    socket.onmessage = (message) => {
      let msg = '';
      const res = JSON.parse(message.data);
      texts[res.audio_start] = res.text;
      const keys = Object.keys(texts);
      keys.sort((a, b) => a - b);
      console.log(keys);
      for (const key of keys) {
        if (texts[key]) {
          msg += ` ${texts[key]}`;
        }
      }

      if(msg){
        let final="";
        msg = msg.match(/[^_\W]+/g).join(' ');
        let split_msg = msg.split(" ");
        for(let i=0; i<split_msg.length;i++){
          if(chosen_words.includes(split_msg[i].toUpperCase())){
            final += split_msg[i] + " ";
          }else{
            final += '<i>'+split_msg[i] + '</i> ';
          }
        }
        messageEl.innerHTML = final;
      }



    };
    
    socket.onclose = event => {
      console.log("SOCKET CLOSED");
      socket = null;
    }

    socket.onopen = () => {

      for(var i=0; i<6; i++){


        var list_num = Math.floor(Math.random() * 3);

        lists = [four,five,six,seven]

        var ran = Math.floor(Math.random() * lists[list_num].length);

        let word = lists[list_num][ran];
        chosen_words.push(word.toUpperCase());

        sen_box.innerHTML += (word.toUpperCase() + " ");
      }
      caption_div.style.width = '100%';
      buttonEl.innerText="End Recording";
      // once socket is open, begin recording
      messageEl.style.display = '';
      if(!recorder){
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          recorder = new RecordRTC(stream, {
            type: 'audio',
            mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
            recorderType: StereoAudioRecorder,
            timeSlice: 250, // set 250 ms intervals of data that sends to AAI
            desiredSampRate: 16000,
            numberOfAudioChannels: 1, // real-time requires only one channel
            bufferSize: 4096,
            audioBitsPerSecond: 128000,
            ondataavailable: (blob) => {
              const reader = new FileReader();
              reader.onload = () => {
                const base64data = reader.result;

                // audio data must be sent as a base64 encoded string
                if (socket) {
                  socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
                }
              };
              reader.readAsDataURL(blob);
            },
          });


          recorder.startRecording();

        })
        .catch((err) => console.error(err));
      }
    };
  }

  isRecording = !isRecording;
};

buttonEl.addEventListener('click', () => run());