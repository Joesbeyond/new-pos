/**
 * Created by joes on 15-2-5.
 */
function Item(barcode, name, unit, price, brand) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
    this.brand = brand;
}

Item.loadAllItems = function () {
    return [
        new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'),
        new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'),
        new Item('ITEM000001', '雪碧', '瓶', 3.00, ''),
        new Item('ITEM000007', '果粒橙', '瓶', 3.50, ''),
        new Item('ITEM000002', '云山苹果', '斤', 5.50, '云山'),
        new Item('ITEM000003', '云山荔枝', '斤', 15.00, '云山'),
        new Item('ITEM000004', '电池', '个', 2.00, ''),
        new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'),
        new Item('ITEM000008', '康师傅冰红茶', '瓶', 3.00, '康师傅'),
        new Item('ITEM000006', '羽毛球', '个', 1.00, '')
    ];
};

Item.findItemByBarcode = function (barcode) {
    var items = Item.loadAllItems();
    return _.find(items, {'barcode': barcode});
};

Item.prototype.getBarcode = function () {
    return this.barcode;
};

Item.prototype.getName = function () {
    return this.name;
};

Item.prototype.getUnit = function () {
    return this.unit;
};

Item.prototype.getPrice = function () {
    return this.price;
};

Item.prototype.getBrand = function () {
    return this.brand;
};


module.exports = Item;
