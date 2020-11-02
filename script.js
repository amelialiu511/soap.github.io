// Handle click small image, replace the big image
$(function() {

    $("#sm_image").find('img').bind("click", function() {
        var src = $(this).attr("src");
        // Check the beginning of the src attribute  
        
        // This is just for demo visibility
        $(this).attr("src", src);

        $("#big_pic").attr("src", src);
    });

});



//$( ".hello" ).appendTo( ".goodbye" );

function findImages(){
    var parentDir = "./desc/civic_2012";
    
    console.log(parentDir);
    var fileCrowler = function(data){
        var titlestr = $(data).filter('title').text();
        // "Directory listing for /Resource/materials/xxx"
        var thisDirectory = titlestr.slice(titlestr.indexOf('/'), titlestr.length)

        //List all image file names in the page
        $(data).find("a").attr("href", function (i, filename) {
            if( filename.match(/\.(jpe?g|png|gif)$/) ) { 
                var fileNameWOExtension = filename.slice(0, filename.lastIndexOf('.'))
                // var img_html = "<img src='{0}' id='{1}' alt='{2}' width='75' height='75' hspace='2' vspace='2' onclick='onImageSelection(this);'>".format(thisDirectory + filename, fileNameWOExtension, fileNameWOExtension);
                // $("#sm_image").append(img_html);
                $( ".templ" ).appendTo( "#sm_image" );
            }
            else{ 
                $.ajax({
                    url: thisDirectory + filename,
                    success: fileCrowler
                });
            }
        });}

        $.ajax({
        url: parentDir,
        success: fileCrowler
    });
}