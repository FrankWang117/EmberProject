import Controller from "@ember/controller";

export default Controller.extend({
    actions: {
        increaseTP(id) {
            let ershoufang = this.store.peekRecord("ershoufang", id);
            let newTP = ershoufang.incrementProperty("totalprice");
            let dirtyAttributes = ershoufang.get("hasDirtyAttributes");
            let changedAttributes = ershoufang.changedAttributes();
            let objectAttributes = {
                newTP: newTP,
                dirtyAttributes: dirtyAttributes,
                changedAttributes: changedAttributes
            };

            console.log(changedAttributes);
            this.set("objectAttributes", objectAttributes);
        },
        deleteRecord() {
            let ershoufang1 = this.store.peekRecord("ershoufang", "ershoufang01");
			/**
			 * Record.deleteRecord();
			 */

            ershoufang1.deleteRecord();
            let isDeleted = ershoufang1.get("isDeleted");

            console.log(isDeleted);
            ershoufang1.save();

        }
    }
});
