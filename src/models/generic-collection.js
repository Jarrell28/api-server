'use strict';

class GenericCollection {
    constructor(schema) {
        this.model = schema;
    }

    create(record) {
        let newRecord = new this.model(record);
        return newRecord.save();
    }

    read(_id) {
        if (_id) {
            return this.model.findById(_id);
        } else {
            return this.model.find({});
        }
    }

    update(_id, record) {
        return this.model.findByIdAndUpdate(_id, record, { new: true }); // third parameter makes sure mongoose returns the new updated object
    }

    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}

module.exports = GenericCollection;