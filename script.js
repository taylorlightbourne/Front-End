// welcome page script

const quoteData = () => {
    fetch("http://quotes.rest/qod.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const contents = document.querySelector("#quoteAPI");
        const quoteContainer = document.createElement("p");
        quoteContainer.classname = "randomQuote";
        quoteContainer.innerHTML = data['contents']['quotes'][0]['quote'];
        const authorContainer = document.createElement("p");
        authorContainer.classname = "author";
        authorContainer.innerHTML = "~ " + data['contents']['quotes'][0]['author'];
        contents.append(quoteContainer, authorContainer);
      });
  };
quoteData();

// generator script
const audioA = document.getElementById("audioA");
const audioB = document.getElementById("audioB");
const audioC = document.getElementById("audioC");
const audioD = document.getElementById("audioD");
const audioE = document.getElementById("audioE");
const audioF = document.getElementById("audioF");
const audioG = document.getElementById("audioG");

// play and pause functions - generator
function playA() {
    audioA.play();
}
function stopA() {
    audioA.pause();
}
function playB() {
    audioB.play();
}
function stopB() {
    audioB.pause();
}
function playC() {
    audioC.play();
}
function stopC() {
    audioC.pause();
}
function playD() {
    audioD.play();
}
function stopD() {
    audioD.pause();
}
function playE() {
    audioE.play();
}
function stopE() {
    audioE.pause();
}
function playF() {
    audioF.play();
}
function stopF() {
    audioF.pause();
}
function playG() {
    audioG.play();
}
function stopG() {
    audioG.pause();
}

// change picture when play

function activeImageA() {
    if (document.getElementById("A").src == "noteA-glow.png") 
        {
            document.getElementById("A").src = "noteA-glow.png";
        }
        else 
        {
            document.getElementById("A").src = "noteA-glow.png";
        }
    }
function activeImageB() {
    if (document.getElementById("B").src == "noteB-glow.png") 
        {
            document.getElementById("B").src = "noteB-glow.png";
        }
        else 
        {
            document.getElementById("B").src = "noteB-glow.png";
        }
    }
function activeImageC() {
    if (document.getElementById("C").src == "noteC-glow.png") 
        {
            document.getElementById("C").src = "noteC-glow.png";
        }
        else 
        {
            document.getElementById("C").src = "noteC-glow.png";
        }
    }
function activeImageD() {
    if (document.getElementById("D").src == "noteD-glow.png") 
    {
        document.getElementById("D").src = "noteD-glow.png";
    }
    else 
    {
        document.getElementById("D").src = "noteD-glow.png";
    }
}
function activeImageE() {
    if (document.getElementById("E").src == "noteE-glow.png") 
    {
        document.getElementById("E").src = "noteE-glow.png";
    }
    else 
    {
        document.getElementById("E").src = "noteE-glow.png";
    }
}
function activeImageF() {
    if (document.getElementById("F").src == "noteF-glow.png") 
        {
            document.getElementById("F").src = "noteF-glow.png";
        }
        else 
        {
            document.getElementById("F").src = "noteF-glow.png";
        }
    }
function activeImageG() {
    if (document.getElementById("G").src == "noteG-glow.png") 
    {
        document.getElementById("G").src = "noteG-glow.png";
    }
    else 
    {
        document.getElementById("G").src = "noteG-glow.png";
    }
}

// change picture back to original when stop

function disableImageA() {
    if (document.getElementById("A").src == "noteA.png") 
        {
            document.getElementById("A").src = "noteA.png";
        }
        else 
        {
            document.getElementById("A").src = "noteA.png";
        }
    }
function disableImageB() {
    if (document.getElementById("B").src == "noteB.png") 
        {
            document.getElementById("B").src = "noteB.png";
        }
        else 
        {
            document.getElementById("B").src = "noteB.png";
        }
    }
function disableImageC() {
    if (document.getElementById("C").src == "noteC.png") 
        {
            document.getElementById("C").src = "noteC.png";
        }
        else 
        {
            document.getElementById("C").src = "noteC.png";
        }
    }
function disableImageD() {
    if (document.getElementById("D").src == "noteD.png") 
    {
        document.getElementById("D").src = "noteD.png";
    }
    else 
    {
        document.getElementById("D").src = "noteD.png";
    }
}
function disableImageE() {
    if (document.getElementById("E").src == "noteE.png") 
    {
        document.getElementById("E").src = "noteE.png";
    }
    else 
    {
        document.getElementById("E").src = "noteE.png";
    }
}
function disableImageF() {
    if (document.getElementById("F").src == "noteF.png") 
        {
            document.getElementById("F").src = "noteF.png";
        }
        else 
        {
            document.getElementById("F").src = "noteF.png";
        }
    }
function disableImageG() {
    if (document.getElementById("G").src == "noteG.png") 
    {
        document.getElementById("G").src = "noteG.png";
    }
    else 
    {
        document.getElementById("G").src = "noteG.png";
    }
}
// Contact Us Page


$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});