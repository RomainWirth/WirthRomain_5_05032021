function create_product_sheet(teddies, item_id) {

    let create_product_sheet_url = "http://localhost:3000/api/teddies";
    
    fetch(create_product_sheet_url)
        .then(function(product_sheet_response) {
            if (product_sheet_response.ok) {
                return product_sheet_response.json();
            }
        })
        .then(function(product_sheet_json) {
            
            let html_product_sheet = getElementById("product_sheet");
            
            let x = (product_sheet_json.price)/100;
            let y = x.toFixed(2);
            let item_text_node_price = document.createTextNode(y + " Euros");
            let item_text_node_description = document.createTextNode(product_sheet_json.description);
    
            let item_options = item_options = product_sheet_json.colors;
            let item_name = product_sheet_json.name;
            let item_id = product_sheet_json._id;
            let item_imageUrl = product_sheet_json.imageUrl;
    
            let new_product_sheet = document.createElement("div");
            new_product_sheet.className = "product_sheet__image";

            let 
        })
        .catch (function(err) {
            alert("Error " + err);
        })
    }