const data = [{
    "ebrochureId": "jgt6zrj8gvhhz",
    "paramsUrl": "dddddd-jgt6zrj8gvhhz",
    "userId": "1",
    "name": "dddddd",
    "content": "gjujj",
    "organization": "ttttttttttttttt",
    "tel": "555555555555555555",
    "cc_tel": "+66",
    "email": "",
    "website": "",
    "line": "",
    "facebook": "",
    "twitter": "",
    "linkedin": "",
    "photo": "https://api.beecard.net:81/api/attachments/files/download/fJe8rhZvmzfKoMKrBSBV.jpg",
    "qrcode": "/v/b1.1/qrcode/jgt6zrj8gvhhz.png",
    "address": "",
    "locality": "",
    "region": "",
    "country": "",
    "postalCode": "",
    "maps": "",
    "category": "",
    "isActive": true,
    "locale": "",
    "expiryDate": "2018-06-14T16:59:59.457Z",
    "created_at": "2018-05-05T16:35:00.000Z",
    "updated_at": "2018-05-05T16:35:03.000Z",
    "id": 51,
    "brochure_item": [{
        "title": "uuuu",
        "content": "",
        "price": "66",
        "video": "",
        "photo": "https://api.beecard.net:81/api/attachments/files/download/eFDCNVeUMHJAGEGfDlZu.jpg",
        "in_stock": "0",
        "created_at": "2018-05-05T16:35:03.000Z",
        "updated_at": "2018-05-05T16:35:03.000Z",
        "logo": ""
    }, {
        "title": "uuuu",
        "content": "",
        "price": "66",
        "video": "",
        "photo": "https://api.beecard.net:81/api/attachments/files/download/eFDCNVeUMHJAGEGfDlZu.jpg",
        "in_stock": "0",
        "created_at": "2018-05-05T16:35:03.000Z",
        "updated_at": "2018-05-05T16:35:03.000Z",
        "logo": ""
    }, {
        "title": "uuuu",
        "content": "",
        "price": "66",
        "video": "",
        "photo": "https://api.beecard.net:81/api/attachments/files/download/eFDCNVeUMHJAGEGfDlZu.jpg",
        "in_stock": "0",
        "created_at": "2018-05-05T16:35:03.000Z",
        "updated_at": "2018-05-05T16:35:03.000Z",
        "logo": ""
    }],
    "photo_item": [],
    "photo_item_delete": [],
    "brochure_item_delete": []
}]
let d =[]
let x = Array.from(new Set(d.map(JSON.stringify))).map(JSON.parse);

console.log(x)