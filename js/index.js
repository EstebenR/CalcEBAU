$(document).ready(function() {
        $('#gobutton').button();

        $('#gobutton').click(function() {
            var bach = parseFloat($("#notBach").val());
            var mat = parseFloat($("#notMat").val());
            var len = parseFloat($("#notLen").val());
            var his = parseFloat($("#notHis").val());
            var ing = parseFloat($("#notIng").val());
            var pon1 = parseFloat($("#notPon1").val());
            var pon2 = parseFloat($("#notPon2").val());
			var total = bach*.6+((mat+len+his+ing)/4)*.4+pon1*.2+pon2*.2;
            alert('Tu media final es: '+ total);
        });
        });
