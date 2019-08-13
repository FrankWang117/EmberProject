import Component from '@ember/component';
import {A} from '@ember/array';

export default Component.extend({
    status: 'item1',
    tagName:'ul',
    items: A([
        {name:'apple',value:0,id:'item1'},
        {name:'orange',value:1,id:'item2'},
        {name:'banana',value:2,id:'item3'},
        {name:'watermelon',value:3,id:'item4'},
        {name:'cherry tomato',value:4,id:'item5'},
        {name:'nectarine',value:5,id:'item6'},

    ])
});
