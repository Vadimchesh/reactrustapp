use wasm_bindgen::prelude::*;

// импорт функции `window.alert` из "Веба"
#[wasm_bindgen]
extern "C" {
 fn alert(s: &str);
}

// экспорт функции `greet` в JavaScript
#[wasm_bindgen]
pub fn greet(name: &str) {
 alert(&format!("Hello, {}!", name));
}