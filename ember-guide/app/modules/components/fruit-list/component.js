import Component from '@ember/component';
import {A} from '@ember/array';
import EmberObject from '@ember/object';

export default Component.extend({
    choosed: EmberObject.create({name:'orange',value:1,id:'item2',count: 21}),
    tagName:'ul',
    items: A([
        {name:'apple',value:0,id:'item1',count: 3},
        {name:'orange',value:1,id:'item2',count: 21},
        {name:'banana',value:2,id:'item3',count: 1},
        {name:'watermelon',value:3,id:'item4',count: 4},
        {name:'cherry tomato',value:4,id:'item5',count: 4},
        {name:'nectarine',value:5,id:'item6',count: 9},

    ])
});
