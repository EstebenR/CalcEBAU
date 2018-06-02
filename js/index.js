$(document).ready(function() {
        $('#gobutton').button();

        $('#gobutton').click(function() {
            var bach = parseInt($("#notBach").val());
            var mat = parseInt($("#notMat").val());
            var len = parseInt($("#notLen").val());
            var his = parseInt($("#notHis").val());
            var ing = parseInt($("#notIng").val());
            var pon1 = parseInt($("#notPon1").val());
            var pon2 = parseInt($("#notPon2").val());
						var total = bach*.6+((mat+len+his+ing)/4)*.4+pon1*.2+pon2*.2;
            alert('Tu media final es: '+ total);
        });
        });