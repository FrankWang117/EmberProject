
import Component from '@ember/component';
import { computed }  from '@ember/object';

export default Component.extend({
    tagName: 'li',
    classNames: ['item'],
    localClassNames: 'item',
    classNameBindings: ['active'],
    active: computed('choosed',function() {
        let {fruit,choosed}  = this.getProperties('fruit','choosed');

        if(fruit.id === choosed.id) {
            return true
        }
        return false
    }),
    onClick() {

    },
    click() {
        let fruit = this.get('fruit'),
            action = this.get('onClick');

            // console.log(fruit)
            console.log(this.get('choosed'))
        action(fruit);
    }
});
