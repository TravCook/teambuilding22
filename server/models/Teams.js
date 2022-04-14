const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    catcher: {
      type: Object
    },
    firstStarter: {
      type: Object,
    },
    firstBase: {
      type: Object,
    },
    secondBase: {
      type: Object,
    },
    shortStop: {
      type: Object,
    },
    thirdBase: {
      type: Object,
    },
    leftField: {
      type: Object,
    },
    centerField: {
      type: Object,
    },
    rightField: {
      type: Object,
    },
    starter2: {
      type: Object,
    },
    starter3: {
      type: Object,
    },
    starter4: {
      type: Object,
    },
    starter5: {
      type: Object,
    },
    bench1: {
      type: Object,
    },
    bench2: {
      type: Object,
    },
    bench3: {
      type: Object,
    },
    bench4: {
      type: Object,
    },
    bench5: {
      type: Object,
    },
    reliever1: {
      type: Object,
    },
    reliever2: {
      type: Object,
    },
    reliever3: {
      type: Object,
    },
    setup: {
      type: Object,
    },
    closer: {
      type: Object,
    }
})


const Team = mongoose.model('Team', teamSchema)

module.exports=Team