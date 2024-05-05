  function updatePageURL(i_pageID) {
      if (history.pushState) {
          var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?page=' +i_pageID;
          window.history.pushState({path:newurl},'',newurl);
      }
  }


  function phanTrangBlog(totalBlog, i_pageID) {
      var tongPageBlog = 1;
      if (totalBlog % 10 > 0) {
          tongPageBlog = Math.floor(totalBlog / 10) + 1;
      } else {
          tongPageBlog = Math.floor(totalBlog / 10);
      }

      $("#phan-trang-blog").empty();
      var i_pageIDm1 = i_pageID - 1;
      var i_pageIDm2 = i_pageID - 2;
      var i_pageIDp1 = Number(i_pageID) + 1;
      var i_pageIDp2 = Number(i_pageID) + 2;

      if (i_pageID > 1) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + i_pageIDm1 + ')" >«</a>');
      }
      if (i_pageID > 3) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',1)" >1</a>');
      }
      if (i_pageID > 4) {
          $('#phan-trang-blog').append('...');
      }
      if (i_pageID > 2) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + i_pageIDm2 + ')" >' + i_pageIDm2 + '</a>');
      }
      if (i_pageID > 1) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + i_pageIDm1 + ')" >' + i_pageIDm1 + '</a>');
      }
      $('#phan-trang-blog').append('<span class="current"><b>' + i_pageID + '</b></span>');
      if (i_pageID < tongPageBlog - 1) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + i_pageIDp1 + ')" >' + i_pageIDp1 + '</a>');
      }
      if (i_pageID < tongPageBlog - 2) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + i_pageIDp2 + ') ">' + i_pageIDp2 + '</a>');
      }
      if (i_pageID < tongPageBlog - 3)
          $('#phan-trang-blog').append('...');
      if (i_pageID < tongPageBlog) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + tongPageBlog + ')" >' + tongPageBlog + '</a>');
      }

      if (i_pageID < tongPageBlog) {
          $('#phan-trang-blog').append('<a class="pagenav" onclick="loadTrangBlog(' + totalBlog + ',' + i_pageIDp1 + ')" >»</a>');
          $('#phan-trang-blog').append('<br/><div style="margin-top:3px;margin-bottom:10px"><input style="padding:0px 0px 0px 0px; margin-right:15px; width:60px" type="number" id="ano" name="page" min="1" max="' + tongPageBlog + '"><input type="submit" class="pagenav" onclick="getPageBlog(' + totalBlog + ')" value="Go"></div>');
      }

  }

  function getPageBlog(totalBlog){
      loadTrangBlog(totalBlog,$("#ano").val());
  }

  function loadTrangBlog(totalBlog, i_pageID) {
      $("#blogPlace").empty();
      updatePageURL(i_pageID);
      var chatli = "../forum_list?page=" + i_pageID;
      $.get(chatli, function(t) {
          $("#blogPlace").append(t);
      });

      phanTrangBlog(totalBlog, i_pageID);

  }

  loadTrangBlog(totalBlog, i_pageID);
  phanTrangBlog(totalBlog, i_pageID);