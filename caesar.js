
//  Разработчик: Смольников В.В. ©
function caesar(text, regim="shifr", key=3){
	function calc_pos(pos, module, key, regim) {
		if (regim == "shifr")
			current_pos = (pos+key)%module;
		else {
			current_pos = (pos-key)%module;
			if (current_pos%module<0) {
				current_pos += module;
			}
		}
		return current_pos;
	}
	
	alf="абвгдежзийклмнопрстуфхцчшщъыьэюя";
	if (key<=0)
		return text;
	module =alf.length
	shifrtext="";
	for (symbol of text) {
		pos = alf.indexOf(symbol);
		if (pos == -1) {
			alert("Удалите запрещенный символ!");
			break;
		}
		shifr_sym = alf[calc_pos(pos, module, key, regim)];
		shifrtext += shifr_sym;
	}
	return shifrtext;		
}

