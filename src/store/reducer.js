/* JS Action */
const NEW_QUOTE = 'NEW_QUOTE'
/* initial state */
const defaultState = {
    randomNumber:0,
    randomColor:Math.floor(Math.random() * 255),
    randomColorTwo:Math.floor(Math.random() * 255),
    randomColorThree:Math.floor(Math.random() * 255),
    randomQuote:[['Eighty percent of success is showing up.'],['Life isn\'t about getting and having, it\'s about giving and being.'],['We become what we think about.'],['I have learned over the years that when one\'s mind is made up, this diminishes fear.'],['There are no traffic jams along the extra mile.'],['Your time is limited, so don\'t waste it livinig someone else\'s life.'],['Build your own dreams, or someone else will hire you to build theirs.'],['Change your thoughts and you change your world.'],['Happiness is not something ready made. It comes from your own actions.'],['You miss 100% of the shots you don\'t take.'],['The mind is everything. What you think you become.'],['Every strike brings me closer to the next home run.'],['Nothing is impossible, the word itself says, "I\'m possible!']],
    randomAuthor:[['- Woody Allen'],['- Kevin Kruse'],['- Earl Nightingale'],['- Rosa Parks'],['- Roger Staubach'],['- Steve Jobs'],['- Farrah Gray'],['- Norman Vincent Peale'],['- Dalai Lama'],['-Wayne Gretzky'],['- Buddha'],['- Babe Ruth'],['- -Audrey Hepburn']]
}
/* Update - Delete - Manage State and Dispatched Actions Redux */
const reducer = (state = defaultState,action) => {
    
    switch(action.type){
        case NEW_QUOTE:
            return{
                ...state,
                randomNumber:Math.floor(Math.random() * state.randomQuote.length),
                randomColor:Math.floor(Math.random() * 255),
                randomColorTwo:Math.floor(Math.random() * 255),
                randomColorThree:Math.floor(Math.random() * 255),
            }
        default:
            return state
    }
}

export default reducer;


