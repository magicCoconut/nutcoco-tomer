// IP Address Toolkit
// (c) iYUYUE <www.iyuyue.com>

/* get element by id */

function getid(id) {
  return(typeof id == 'string') ? document.getElementById(id) : id
};

/* Remove Array's Duplication */

function toObject(a) {
  var o = {};
  var j = a.length;
  for(var i = 0; i < j; i++) {
    o[a[i]] = true;
  }
  return o;
}

function keys(o) {
  var a = [],
    i;
  for(i in o) {
    if(o.hasOwnProperty(i)) {
      a.push(i);
    }
  }
  return a;
}

function uniqueArray(a) {
  return keys(toObject(a));
}

/* in array */

function inArray(arr, str) {
  var i = arr.length;
  while(i--) {
    if(arr[i] === str) {
      return true;
    }
  }
  return false;
}

/* remove space at the head and the tail */

function removeSpace(str) {
  str = str.replace(/(^\s*)|(\s*$)/g, "");
  return str;
}

/* Show or Hide Object */

function showAndHide(obj, types) {
  var Layer = window.document.getElementById(obj);
  switch(types) {
  case "show":
    Layer.style.display = "block";
    break;
  case "hide":
    Layer.style.display = "none";
    break;
  }
}
/*
function attach(o, e, f) {
    if (document.attachEvent)
        o.attachEvent("on" + e, f);
    else if (document.addEventListener)
        o.addEventListener(e, f, false);
}
*/

/* cookies manipulation */

function setCookie(name, value) {
  var Days = 15;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if(arr != null) return unescape(arr[2]);
  return "";
}

function delCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/* Object Location */

function getOffsetTop(el, p) {
  var _t = el.offsetTop;
  while(el = el.offsetParent) {
    if(el == p) break;
    _t += el.offsetTop
  }
  return _t
};

function getOffsetLeft(el, p) {
  var _l = el.offsetLeft;
  while(el = el.offsetParent) {
    if(el == p) break;
    _l += el.offsetLeft
  }
  return _l
};

// encrypt with bitwise XOR

function enc(str) {
  str = str.toUpperCase(); // incase some unknown problem
  var encoded = "";
  for(i = 0; i < str.length; i++) {
    var a = str.charCodeAt(i);
    var b = a ^ 1; // bitwise XOR with any number
    encoded = encoded + String.fromCharCode(b);
  }
  return encoded;
}

function encryptStr(str) {
  if(getid("encryptCheck").checked) {
    return enc(str);
  } else {
    return str;
  }
}

// get URL parameter

function getParameter() {
  var URLParams = new Array();
  var aParams = document.location.search.substr(1).split('&');
  for(i = 0; i < aParams.length; i++) {
    var aParam = aParams[i].split('=');
    if(!URLParams[aParam[0]]) {
      URLParams[aParam[0]] = aParam[1];
    }
  }
  return URLParams;
}

/* to pull next ip */

function next(input, dual, dns1, dns2, ipv6, enc) {
  $.getScript('//api.ip.tl/ip/?format=js&ip=' + input + '&dual=' + dual + '&dns1=' + dns1 + '&dns2=' + dns2 + '&ipv6=' + ipv6 + '&enc=' + enc + '&lang=' + global.langPreference, function() {
    global.counter = 1; // reset variable
    // incase that remote_ip_info is not defined
    if(typeof remote_ip_info == "undefined" || remote_ip_info == null) {
      var topRet = 101;
    } else {
      var topRet = remote_ip_info.ret;
    }
    if(topRet == 1) {
      var result = '<table class="table table-hover"><thead><tr><th class="hidden-phone">#</th><th>IP</th><th>Location</th><th>ISP</th><th>Description</th></tr></thead><tbody><div id="accordion2" class="accordion">';
      for(var i = 0; i < remote_ip_info.num; i++) {
        var innerRet = remote_ip_info['ip' + i].ret;
        if(innerRet == 1) {
          if(remote_ip_info['ip' + i].name)
          // domian name
          {
            remote_ip_info['ip' + i].name = remote_ip_info['ip' + i].name.toLowerCase(); // Domain name to LowerCase
            for(var j = 0; j < remote_ip_info['ip' + i].num; j++) {
              var domainSetRet = remote_ip_info['ip' + i]['ip' + j].ret;
              if(domainSetRet == 1) {
                result = result + ipFormat(remote_ip_info['ip' + i]['ip' + j], remote_ip_info['ip' + i].name);
              } else if(domainSetRet == -1) {
                result = result + innerError(-1, remote_ip_info['ip' + i]['ip' + j], remote_ip_info['ip' + i].name);
              } else if(domainSetRet == -2 || domainSetRet == -21) {
                result = result + innerError(-21, remote_ip_info['ip' + i]['ip' + j], remote_ip_info['ip' + i].name);
              } else if(domainSetRet == -6) {
                result = result + innerError(-6, remote_ip_info['ip' + i]['ip' + j], remote_ip_info['ip' + i].name);
              } else if(domainSetRet == -29) {
                result = result + innerError(-29, remote_ip_info['ip' + i]['ip' + j]);
              } else if(domainSetRet == -33) {
                result = result + innerError(-33, remote_ip_info['ip' + i]['ip' + j]);
              } else {
                result = result + innerError(7, remote_ip_info['ip' + i]['ip' + j]); //other situation
              }
            }
          } else {
            result = result + ipFormat(remote_ip_info['ip' + i]);
          }
        } else if(innerRet == -1) {
          result = result + innerError(-1, remote_ip_info['ip' + i]);
        } else if(innerRet == -2 || innerRet == -21) {
          result = result + innerError(-21, remote_ip_info['ip' + i]);
        } else if(innerRet == -6) {
          result = result + innerError(-6, remote_ip_info['ip' + i]);
        } else if(innerRet == -29) {
          result = result + innerError(-29, remote_ip_info['ip' + i]);
        } else {
          result = result + innerError(7, remote_ip_info['ip' + i]); //other situation
        }
      }
      result = result + '</div></tbody></table>';
      loaderIconStatus(null);
      $('#demo').html(result);

    } else {
      if(topRet == -32) {
        topError(-32);
      } else if(topRet == -31) {
        topError(-31);
      } else {
        topError(7);
      }
      loaderIconStatus("none");
    }
  });
  remote_ip_info = null;
};

$(document).ready(function() {
  global.dualDNS = 0; // initial variable
  /* submitting trigger */
  var referIP = getParameter()["q"];
  var referMode = getParameter()["m"];
  if(referIP && referIP != null) {
    var temp = unescape(referIP);
    temp = checkRule(temp, "|", "strict");
    if(typeof temp == "undefined") {
      $('#inputTab a[href="#tab2"]').tab('show');
      getid("ip_address_textarea").value = unescape(referIP);
    } else {
      if(referMode && referMode == "1") {
        $('#inputTab a[href="#tab2"]').tab('show');
        getid("ip_address_textarea").value = temp;
      } else {
        getid("ip_address_input").value = temp;
      }
      submitItems();
    }
  } else {
    submitItems();
  }

  $("#ip_check").submit(function() {
    submitItems();
    return false;
  });

  function submitItems() {
    // to be improved
    if($("#tab1").hasClass("active")) {
      var input_ip = getid("ip_address_input").value;
    } else {
      var input_ip = getid("ip_address_textarea").value;
    }
    collectInfo(input_ip);
  }

  function collectInfo(input_ip) {
    loaderIconStatus("show");
    input_ip = input_ip.replace(/\n/g, "|");
    input_ip = checkRule(input_ip, "|", "strict");
    if(typeof input_ip == "undefined") {
      loaderIconStatus("none");
      return;
    }
    setIPCache(input_ip);
    input_ip = encryptStr(input_ip);
    var input_dual = global.dualDNS;
    var input_dns1 = getid("nameserver1").value;
    input_dns1 = input_dns1.replace(/\n/g, "|");
    var input_dns2 = getid("nameserver2").value;
    input_dns2 = input_dns2.replace(/\n/g, "|");
    var input_ipv6 = 0;
    if($("#ipv6").hasClass("active")) {
      input_ipv6++;
      if($("#ipv4").hasClass("active")) {
        input_ipv6++;
      }
    }
    var input_enc = getid("encryptCheck").checked ? 1 : 0;
    next(input_ip, input_dual, input_dns1, input_dns2, input_ipv6, input_enc);
  }
  /* advanced function trigger
  $("#AdvancedTab1,#AdvancedTab2").click(function(){
    if(getid("advanced").style.display != "block") {
      getid("advanced").style.display = "block";
    } else {
      getid("advanced").style.display = "none";
    }
  });
  */

  /* reset the modal */
  $('#MsgModal').on('hidden', function() {
    $('#ModalLabel').html("");
    $('.modal-body').html("");
    $(this).data('modal').$element.removeData();
  });

  /* ip typeahead begin */
  // typeahead list trigger
  $("#ip_address_input").typeahead({
    //minLength: 3,
    source: function(query, process) {
      var strArray = getIPCache();
      process(strArray);
    },
    updater: function(item) {
      var strArray = this.query.split("|");
      strArray.pop();
      strArray = strArray.concat(item);
      var newItem = strArray.join("|");
      if(getid("instantSearch").checked) {
        collectInfo(newItem);
      }
      return newItem;
    },
    matcher: function(item) {
      var strArray = this.query.split("|");
      var query = removeSpace(strArray[strArray.length - 1]);
      if(query && query != "") {
        return ~item.toLowerCase().indexOf(query.toLowerCase());
      }
    },
    sorter: function(items) {
      var strArray = this.query.split("|");
      var query = removeSpace(strArray[strArray.length - 1]);
      if(getid("typeaheadCheck").checked) {
        if(items.length > 0) {
          if(!inArray(items, query)) {
            items.splice(1, 0, query)
          }
        }
      }
      return items;
    },
    highlighter: function(item) {
      var strArray = this.query.split("|");
      var query = removeSpace(strArray[strArray.length - 1]);
      query = query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      return '<i class="fa fa-search"></i>&nbsp;&nbsp;' + item.replace(new RegExp('(' + query + ')', 'ig'), function($1, match) {
        return '<span style="color:#686868;">' + match + '</span>';
      });
    }
  });

  function delIPCache() {
    if(typeof(Storage) !== "undefined") {
      localStorage.removeItem("ipCache");
    }
  }
  function getIPCache() {
    if(typeof(Storage) !== "undefined") {
      var seperator = '|';
      return (localStorage.getItem("ipCache") === null) ? ['ip.tl'] : localStorage.getItem("ipCache").split(seperator);
    }
  }
  function setIPCache(str) {
    if(typeof(Storage) !== "undefined") {
      var seperator = "|";    
      var newArray = str.split(seperator);
      
      for(var i = 0; i < newArray.length; i++) {
        newArray[i] = removeSpace(newArray[i]);
        newArray[i] = newArray[i].toLowerCase();
        if(!newArray[i] || newArray[i].length < 7) {
          newArray.splice(i, 1);
          i--;
        }
      }

      var originArray = getIPCache();
      newArray = originArray.concat(newArray);
      newArray = uniqueArray(newArray);

      // remove records (more than max limit)
      var maxHistoryRecords = 30;
      if(newArray.length>maxHistoryRecords)
        newArray.splice(0, newArray.length-maxHistoryRecords);

      str = newArray.join(seperator);
      localStorage.setItem("ipCache", str);
    }
    
  } 
  /* ip typeahead end */

  /* conf load */
  $("#pasteCheck").attr("checked", (getCookie("pasteCheck") == "0") ? false : true);
  $("#typeaheadCheck").attr("checked", (getCookie("typeaheadCheck") == "0") ? false : true);
  $("#instantSearch").attr("checked", (getCookie("instantSearch") == "0") ? false : true);
  $("#encryptCheck").attr("checked", (getCookie("encryptCheck") == "0") ? false : true);
  // $("#encryptCheck").attr("checked", (getCookie("encryptCheck") == "1") ? true : false);

  /* conf set */
  $("#pasteCheck").click(function() {
    if(getid("pasteCheck").checked) {
      Checker($("#tab1").hasClass("active") ? "|" : "\n")
      setCookie("pasteCheck", 1);
    } else {
      setCookie("pasteCheck", 0);
    }
  });

  $("#typeaheadCheck").click(function() {
    if(getid("typeaheadCheck").checked) {
      setCookie("typeaheadCheck", 1);
    } else {
      delIPCache();
      setCookie("typeaheadCheck", 0);
    }
  });

  $("#instantSearch").click(function() {
    if(getid("instantSearch").checked) {
      setCookie("instantSearch", 1);
    } else {
      setCookie("instantSearch", 0);
    }
  });

  $("#encryptCheck").click(function() {
    if(getid("encryptCheck").checked) {
      setCookie("encryptCheck", 1);
    } else {
      setCookie("encryptCheck", 0);
    }
  });

});

/* to format IP information */

function ipFormat(current) {
  //var name=arguments[1]?arguments[1]:'';
  if(!current.ip) {
    current.ip = 'unknown';
  }
  var name = (typeof(arguments[1]) == "undefined") ? '' : ' (' + arguments[1] + ')';

  var httpStatus = (typeof(arguments[1]) == "undefined") ? '' :'&nbsp;/&nbsp;<a onclick="remoteModal(\'HTTP Status for ' + arguments[1] + '\', \'//api.ip.tl/ip/header.php?query=' + arguments[1] + '\')" href="#">HTTP Status</a>';

  var result = '<tr class="info" onclick="moreInfo(' + global.counter + ')"><td class="hidden-phone">' + global.counter + '</td><td>' + current.ip + name + '</td><td>' + (current.country ? current.country : '') + (current.province ? ' ' + current.province : '') + (current.city ? ' ' + current.city : '') + (current.district ? ' ' + current.district : '') + '</td><td>' + (current.isp ? current.isp : '') + '</td><td>' + (current.type ? current.type + ' ' : '') + (current.desc ? current.desc : '') + '</td></tr><tr><td colspan="5" class="more"><div class="accordion-body collapse" id="collapse' + global.counter + '" style="height: 0px;"><div class="accordion-inner"><li>Address Range: ' + (current.start ? current.start : '') + ' ï½ž ' + (current.end ? current.end : '') + '</li> <li> Related information: <a onclick="remoteModal(\'Whois for ' + current.ip + '\', \'//api.ip.tl/whois/api.php?query=' + current.ip + '&output=nice' + '\')" href="#">Whois</a>'+httpStatus+'&nbsp;/&nbsp;<a href="http://toolbar.netcraft.com/site_report?url='+ current.ip +'" target="_blank">Server Info</a>&nbsp;/&nbsp;<a href="http://www.dnsbl.info/dnsbl-database-check.php?IP=' + current.ip + '" target="_blank">DNSBL</a>&nbsp;/&nbsp;<a href="http://bgp.he.net/ip/' + current.ip + '" target="_blank">BGP</a></li><li>Test: Ping ( <a href="https://cloudmonitor.ca.com/en/ping.php?varghost=' + current.ip + '" target="_blank">Worldwide</a> | <a href="http://ping.chinaz.com/?alllinetype=%E5%85%A8%E9%80%89&linetype=%E7%94%B5%E4%BF%A1&linetype=%E5%A4%9A%E7%BA%BF&linetype=%E8%81%94%E9%80%9A&linetype=%E7%A7%BB%E5%8A%A8&linetype=%E6%B5%B7%E5%A4%96&host=' + current.ip + '" target="_blank">China</a> )&nbsp;/&nbsp;<a href="http://tracert.gongju.com/#url=' + current.ip + '" target="_blank">Traceroute</a> &nbsp;/&nbsp;<a href="http://www.17ce.com/" target="_blank">Speed</a>&nbsp;/&nbsp;Port Scan</li></div></div></td></tr>';
  global.counter++;
  return result;
};

/* to format inner Error information */

function innerError(code, current) {
  if(!current.ip) {
    current.ip = 'unknown';
  }
  var name = (typeof(arguments[2]) == "undefined") ? '' : arguments[2];

  var warningTitle = '<tr class="warning"><td class="hidden-phone">';

  if(code == -1) {
    var msg = warningTitle + global.counter + '</td><td>' + current.ip + ((name == '') ? '' : ' &nbsp;( ' + name + ' )') + '</td><td colspan="3" class="text-warning">The ip address is reserved (private, multicast, etc.)</td></tr>';
  } else if(code == -2 || code == -21) {
    var msg = warningTitle + global.counter + '</td><td>' + name + '</td><td colspan="3" class="text-warning">The input value is neither a valid ip address nor domain name</td></tr>';
  } else if(code == -6) {
    var msg = warningTitle + global.counter + '</td><td>' + current.ip + ((name == '') ? '' : ' &nbsp;( ' + name + ' )') + '</td><td colspan="3" class="text-warning">IPv6 address will be supported in the near future!</td></tr>';
  } else if(code == -29) {
    var msg = '<tr class="error"><td>' + global.counter + '</td><td colspan="4" class="text-error">Sorry, the server is temporarily unable to get your ip address</td></tr>';
  } else if(code == -33) {
    var msg = '<tr class="error"><td>' + global.counter + '</td><td colspan="4" class="text-error">Connect failed to the DNS, please check the nameserver(s)</td></tr>';
  } else {
    var msg = '<tr class="error"><td>' + global.counter + '</td><td colspan="4" class="text-error">Unknown problem! please contact with our technical support</td></tr>';
  }
  global.counter++;
  return msg;
};

function topError(code) {
  if(code == -32) {
    var result = "<p class='text-error'>The query string contains more than 249 Characters.</p>";
  } else if(code == -31) {
    var result = "<p class='text-error'>Please query less than 10 IPs / Domain Names a time!</p>";

  } else {
    var result = "<p class='text-error'>Network connection error = =!</p>";
  }
  $('#ModalLabel').html("<h2 class='text-error'>Oops!</h2>");
  $('.modal-body').html(result);
  $('#MsgModal').modal('toggle');
}

/* display more Info of each row */

function moreInfo(info) {
  $('#collapse' + info).collapse('toggle');
}

/* hide or display the loader icon */

function loaderIconStatus(status) {
  // in case that, the img does not exist
  if(typeof loaderIcon == "undefined") {
    if(status == "show") {
      // var loading = '<br  /><br  /><img id="loaderIcon" style="margin-left: auto; margin-right: auto; display: block;" src="//ip.tl/img/loader.gif"/>';
      var loading = '<br  /><br  /><div id="fountainG"><div id="fountainG_1" class="fountainG"></div><div id="fountainG_2" class="fountainG"></div><div id="fountainG_3" class="fountainG"></div><div id="fountainG_4" class="fountainG"></div><div id="fountainG_5" class="fountainG"></div><div id="fountainG_6" class="fountainG"></div><div id="fountainG_7" class="fountainG"></div><div id="fountainG_8" class="fountainG"></div></div>';
      $('#demo').html(loading);
    }
  } else {
    if(status == "show") {
      getid("loaderIcon").style.display = "block";
    } else if(status == "none") {
      getid("loaderIcon").style.display = "none";
    }
  }
}

/* remote Modal Display*/
function remoteModal(title, url) {
  $('#ModalLabel').html(title);
  $('#MsgModal').modal({
    remote: url
  });
}

/* show nameserver menu */
function MenuShow(e) {
  var input = e;
  if(!input.id) {
    input = e.target ? e.target : e.srcElement;
  }
  currentInput = input;
  var menu = getid("nameserverMenu");
  if(menu.style.display == 'block' && currentInput.id == input.id) {
    return;
  }
  menu.style.left = getOffsetLeft(input) + 'px';
  menu.style.top = (getOffsetTop(input) + (input.offsetHeight - 1)) + 'px';
  menu.style.width = (input.offsetWidth - 2) + 'px';
  menu.style.display = 'block';
}

/* hide nameserver menu */

function MenuHide() {
  if(getid("nameserverMenu")) {
    getid("nameserverMenu").style.display = 'none';
  }
}

/* input nameserver choice */

function serverChoice(server1, server2) {
  $("#nameserver1").val(server1);
  if(global.dualDNS == 2) {
    $("#nameserver2").val(server2);
  }
}

/* choices of DNS Type */

function DNSType(mode) {
  switch(mode) {
  case 1:
    global.dualDNS = 0;
    $("#nameserver1").attr("disabled", "");
    $("#nameserver2").attr("disabled", "");
    $("#DNSButton").html("&nbsp;&nbsp;localhost &nbsp;&nbsp;<span class='caret'></span>");
    break;
  case 2:
    global.dualDNS = 1;
    $("#nameserver1").removeAttr("disabled");
    $("#nameserver2").attr("disabled", "");
    $("#DNSButton").html("Single DNS <span class='caret'></span>");
    break;
  case 3:
    global.dualDNS = 2;
    $("#nameserver1").removeAttr("disabled");
    $("#nameserver2").removeAttr("disabled");
    $("#DNSButton").html("&nbsp;Dual DNS &nbsp;<span class='caret'></span>");
    break;
  default:
    global.dualDNS = 0;
  }
}

/* OnPaste Checker */

function Checker(seperator) {
  // to be improved
  if(seperator == "|") {
    var element = getid("ip_address_input");
  } else {
    var element = getid("ip_address_textarea");
  }
  setTimeout(function() {
    var val = element.value;
    element.value = checkRule(val, seperator, "loose");
  }, 3);
};

function checkRule(val, seperator, mode) {
  if(val.length >= 250 && mode == "strict") {
    topError(-32);
    return;
  }
  var strArray = val.split(seperator);
  if(strArray.length > 10 && mode == "strict") {
    topError(-31);
    return;
  }
  val = "";
  for(var i = 0; i < strArray.length; i++) {
    strArray[i] = removeSpace(strArray[i]);
    val = val + (i != 0 ? seperator : "") + (isIPv6(strArray[i]) ? strArray[i] : parseUri(strArray[i]).host);
  }
  return val;
}

// add a parameter to the URL
function addOrUpdateUrlParam(name, value)
{
  var href = window.location.href.split('#')[0];
  var regex = new RegExp("[&\\?]" + name + "=");
  if(regex.test(href))
  {
    regex = new RegExp("([&\\?])" + name + "=\\d+");
    window.location.href = href.replace(regex, "$1" + name + "=" + value);
  }
  else
  {
    if(href.indexOf("?") > -1)
      window.location.href = href + "&" + name + "=" + value;
    else
      window.location.href = href + "?" + name + "=" + value;
  }
}

// jquery.iecors.js
// jQuery ajax custom transport for IE8/9 XDR

(function( jQuery ) {
  // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)
  jQuery.ajaxSettings.xdr = function() {
    return (window.XDomainRequest ? new window.XDomainRequest() : null);
  };

  // Determine support properties
  (function( xdr ) {
    jQuery.extend( jQuery.support, { iecors: !!xdr });
  })( jQuery.ajaxSettings.xdr() );

  // Create transport if the browser can provide an xdr
  if ( jQuery.support.iecors ) {

    jQuery.ajaxTransport(function( s ) {
      var callback,
        xdr = s.xdr();

      return {
        send: function( headers, complete ) {
          xdr.onload = function() {
            var headers = { 'Content-Type': xdr.contentType };
            complete(200, 'OK', { text: xdr.responseText }, headers);
          };
          
          // Apply custom fields if provided
          if ( s.xhrFields ) {
            xhr.onerror = s.xhrFields.error;
            xhr.ontimeout = s.xhrFields.timeout;
          }

          xdr.open( s.type, s.url );

          // XDR has no method for setting headers O_o

          xdr.send( ( s.hasContent && s.data ) || null );
        },

        abort: function() {
          xdr.abort();
        }
      };
    });
  }
})( jQuery );

// end jquery.iecors.js

// fix issue of Modal on small screens
$(document).ready(function () {
  var modal_window = $('#modal-window');
  $('a[rel=modal]').on('click', function (e) {
    var scroll_position = $(window).scrollTop(), // Where did we start in the window.
         return_position = false; // Should we return to the start position?

    e.preventDefault();

    // Build and show the modal.
    modal_window.modal({
      'remote': $(this).attr('href') + ' #modal-target' // Get remote content from the link.
    }).on('show', function () {
      if (modal_window.css('position') === 'absolute') {
        // We will need to return to where we were.
        return_position = true;
        // Jump to the top of the modal.
        $(window).scrollTop(modal_window.offset().top);
      }
    }).on('hidden', function () {
      if (return_position) {
        // Return to where we were.
        $(window).scrollTop(scroll_position);
      }
    }).modal('show');
  });
});

// IPv6 detection
function isIPv6(str) {
  return /::/.test(str) ? /^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str) : /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str);
};

// based on parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License


function parseUri(str) {
  var o = parseUri.options,
    m = o.parser.exec(str),
    uri = {},
    i = 14;

  while(i--) uri[o.key[i]] = m[i] || "";

  uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
    if($1) uri[o.q.name][$1] = $2;
  });

  return uri;
};

parseUri.options = {
  key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
  q: {
    name: "queryKey",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
};

// unused url parser
/*
function parseUri (str) {
  var re = '^(?:f|ht)tp(?:s)?\://([^/]+)'
  var uri = str.match(re)[1];
  return uri;
}
*/