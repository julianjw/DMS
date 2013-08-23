function initData() {
  jimData.variables["new client"] = "";
  jimData.variables["new client imported"] = "";
  jimData.datamasters["Users' service list"] = [
    {
      "id": 1,
      "datamaster": "Users' service list",
      "userdata": {
        "User name": "Aaric Balin",
        "User Service ID": "46294542",
        "Date": "09/12/2011"
      }
    },
    {
      "id": 2,
      "datamaster": "Users' service list",
      "userdata": {
        "User name": "Abbot Lace",
        "User Service ID": "65263475",
        "Date": "09/12/2011"
      }
    },
    {
      "id": 3,
      "datamaster": "Users' service list",
      "userdata": {
        "User name": "Banjamon Raine",
        "User Service ID": "84745340",
        "Date": "09/12/2011"
      }
    },
    {
      "id": 4,
      "datamaster": "Users' service list",
      "userdata": {
        "User name": "Cadee Erik",
        "User Service ID": "45387210",
        "Date": "10/12/2011"
      }
    },
    {
      "id": 5,
      "datamaster": "Users' service list",
      "userdata": {
        "User name": "Caine Zak",
        "User Service ID": "93785104",
        "Date": "09/12/2011"
      }
    },
    {
      "id": 6,
      "datamaster": "Users' service list",
      "userdata": {
        "User name": "David Justin",
        "User Service ID": "12345678",
        "Date": "09/12/2011"
      }
    }
  ];

  jimData.isInitialized = true;
}(function(window, undefined) {
  var dictionary = {
    "f5514ea9-f647-4059-8b9f-5686f93c4b5f": "Support For Relaxation",
    "1d23446d-3c81-4f4a-ad7c-a06000186e97": "Reports",
    "59923e68-3293-4517-a24a-a82e421e0d47": "edit David",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login page",
    "2e75c9ff-5054-499b-8a63-f5b75a63403f": "Creat",
    "d48cfbbf-8321-45e5-8262-e7bed6d7b46b": "Goal Progress Summary",
    "cc7324b8-8b56-4e2c-a85b-eab61032c7f9": "Client Details",
    "b59ab44c-d5de-4bf3-8738-09aec4d975da": "Added Goal Progress Summary",
    "16fecd5e-2e19-44c7-8692-89501710cfd3": "Client Details Living arrangements",
    "d734cd03-c09a-4751-8a0c-e27f22c1d3fd": "Find Goal Prgress Summary",
    "b48eeef7-645a-421a-8d68-89be55ae87d0": "Support Financial Support",
    "f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6": "Planning Holiday Plan",
    "b0256347-920e-4a96-b04f-c37067885e77": "Client Details alert information",
    "23e1529e-80e6-49fb-bd93-2b163a59a41a": "Edit",
    "46cc2ce7-f2b6-4ee1-9663-b06620a595cf": "Creat client",
    "e3402d48-da11-4385-84a9-49124e685a90": "saved build self-confidence and life opportunities",
    "ede22bf8-36ee-4711-8537-46af67ac8084": "Communications",
    "eed7479b-c751-4fa1-a214-97f37bf42b4e": "saved Help with oral  communication",
    "445d4dc5-3995-4aa9-93e0-64449f915e5e": "Login page Client",
    "df4b21a2-cd86-40d3-a1b6-98bb6d7dc968": "Education and Employment Employment",
    "abbf570d-8795-46c6-ac05-58f32e93e24e": "Selection Page",
    "8cdb0a9b-2807-4554-9070-64f774f6e903": "Health Management Plan",
    "2a28a487-212b-4981-b03b-c9022b1d4241": "Edit build self-confidence and life opportunities",
    "fd7a6a57-42fd-4e2a-9584-b8f582120847": "Existing Page",
    "02c14376-daf5-44cd-8f08-5503847fdd16": "Personal Plan Invite Letter",
    "360b35bf-13f6-44e2-be3a-e911eac8f513": "Client Details Formal Orders",
    "88b558c9-8276-48d1-ac91-1024c3afcc90": "Plan Meeting Schedule",
    "871da563-d566-4c66-9de3-e882d2c2e5fe": "Health and Disability Information",
    "d7c6c233-5a03-4bd7-b9bd-08c932e0bed9": "Saved",
    "ca0dae70-a80f-4846-9b04-4aab81e64c1a": "Create New",
    "5ca1fe0c-ffd3-4891-aea1-b0fdf9392eb3": "Saved application",
    "2e595aeb-e5cb-44e4-a744-4abc3933dc27": "Sign off Confirmation",
    "5e03310e-ca6f-427b-9d85-c1b8bccbf3e0": "Risk Assessment",
    "f8b0777f-0dc2-477a-8448-5f7de88b47c2": "saved David",
    "17e063ad-8834-4ef2-aa14-8b15985c923a": "Support Mobility and Transport",
    "213f5d6a-0cb9-463a-a17a-44a8d0d55353": "Hompage",
    "b599290e-be45-4a14-aa02-617004f9ded2": "Case Note",
    "d8a9f2bc-37f0-428a-b80f-cbe944234da0": "Planning Goal Plan",
    "bb0e12b6-1a98-4279-8540-318e5000bdc1": "Education and Employment Education",
    "58b182ee-de55-4f44-9352-6b6f90183f40": "Creat imported",
    "a72ed425-dbf5-444d-bb51-ac3d6c04e9f5": "Existing Plan Display",
    "f25de24a-fdc3-47be-a55e-dbaa116e70ff": "Find Existing",
    "ad910318-8dd8-4074-85ca-0cc3f45b8032": "Health Dietary Requirements",
    "846ff8af-276f-4aa7-836d-33c286442143": "Support required",
    "8ce042cb-6ec0-4728-8929-188370859a5c": "User Comment",
    "89821ff0-afa2-4f59-b184-25c9838c36e2": "Edit Help with oral  communication",
    "74df60da-34e7-4d90-8bbe-0086c8cb070c": "find Sechedule",
    "72d81d72-9ecb-4d9f-8f8f-11898226333d": "Support For Daily Activites",
    "658f3c25-ec1f-4636-955e-10fd7d3578f1": "960 grid - 12 columns imported_4",
    "18348e14-e6f2-4597-b311-168b357dd6ba": "960 grid - 12 columns imported_3",
    "b357fb86-a3fa-46e6-9aa7-6f9fa5e1cc10": "960 grid - 12 columns imported imported",
    "4dae62f8-0078-443f-a54a-c8088f0d0fed": "960 grid - 12 columns imported_2",
    "b1f915c8-4368-4c3f-9da0-240173199a4a": "960 grid - 12 columns imported_1",
    "719f4b4f-72ab-4701-81fd-5732bc93bb0f": "960 grid - 16 columns imported_4",
    "37a42aeb-3ce7-4134-bfb1-8d41f8ad907b": "Template 1 imported_2 imported",
    "fa5a1307-dfac-4aac-b52b-570d56d6a758": "960 grid - 16 columns imported_3",
    "1db75963-cd76-479a-9089-eb55c675c05e": "960 grid - 16 columns imported_2",
    "01b3b671-b98a-4195-b0ba-7d6b9ba17f07": "960 grid - 16 columns imported_1",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "3d6592dc-8415-4776-970c-b8f10e9e7ea6": "960 grid - 16 columns imported_3 imported",
    "4a7301fc-9f5f-4561-b28f-72617bab97d4": "960 grid - 12 columns imported_3 imported",
    "443e1523-d8c6-4e05-88a2-1cbe2dd57092": "960 grid - 16 columns imported",
    "87410e67-d1fb-4331-8d18-3cae28dcdedf": "960 grid - 16 columns imported_1 imported",
    "cdca1cb0-a30e-43f1-bc6a-65d159579b11": "960 grid - 12 columns imported_1 imported",
    "3e91eb0c-8205-4773-8c5d-bc5b15dd0eba": "Template 1 imported_3 imported",
    "3384ced2-1575-4284-b7f7-caecb2402939": "Template 1 imported_4",
    "5a1d8694-e263-4e06-b212-fd99b7662b35": "Template 1 imported_3",
    "da9dcc91-bee5-4381-a8d8-b6c7b7002568": "Template 1 imported_2",
    "8e701c18-376e-4743-922c-3b5c1df400f6": "Template 1 imported_1 imported",
    "8a65efe3-b49c-4cc5-9eba-27ca3556c230": "Template 1 imported_1",
    "f8540ae8-1ab2-477d-94d5-e22beccd7535": "960 grid - 16 columns imported imported",
    "c73dc252-1a90-4c60-9145-5ff177a02039": "960 grid - 12 columns imported",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "c30bb334-1e61-4082-a008-7d59866f5ade": "960 grid - 16 columns imported_2 imported",
    "25d49f8d-616f-4fcc-bbe1-3fa2fcabe788": "960 grid - 12 columns imported_2 imported",
    "97fecf55-f857-4237-9412-c7ab67546cef": "Template 1 imported imported",
    "254ea21a-a611-49e4-b4ff-c300597b023d": "Template 1 imported"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);jQuery("#simulation")
  .on("click", ".s-f5514ea9-f647-4059-8b9f-5686f93c4b5f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f5514ea9-f647-4059-8b9f-5686f93c4b5f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f5514ea9-f647-4059-8b9f-5686f93c4b5f #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f5514ea9-f647-4059-8b9f-5686f93c4b5f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-1d23446d-3c81-4f4a-ad7c-a06000186e97 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8ce042cb-6ec0-4728-8929-188370859a5c"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,null ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Input_5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8b0777f-0dc2-477a-8448-5f7de88b47c2"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8b0777f-0dc2-477a-8448-5f7de88b47c2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image#moz": "-moz-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#EFEFEF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image#moz": "-moz-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#EFEFEF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-59923e68-3293-4517-a24a-a82e421e0d47 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-59923e68-3293-4517-a24a-a82e421e0d47 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-2e75c9ff-5054-499b-8a63-f5b75a63403f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b59ab44c-d5de-4bf3-8738-09aec4d975da"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-2e75c9ff-5054-499b-8a63-f5b75a63403f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2e75c9ff-5054-499b-8a63-f5b75a63403f #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-2e75c9ff-5054-499b-8a63-f5b75a63403f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e75c9ff-5054-499b-8a63-f5b75a63403f",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d734cd03-c09a-4751-8a0c-e27f22c1d3fd"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_13": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_14": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_14": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_15": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b #s-Label_15": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d48cfbbf-8321-45e5-8262-e7bed6d7b46b .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_15")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16fecd5e-2e19-44c7-8692-89501710cfd3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/360b35bf-13f6-44e2-be3a-e911eac8f513"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-cc7324b8-8b56-4e2c-a85b-eab61032c7f9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-b59ab44c-d5de-4bf3-8738-09aec4d975da .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_5",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e3402d48-da11-4385-84a9-49124e685a90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_5",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b59ab44c-d5de-4bf3-8738-09aec4d975da .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_17": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_42": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b59ab44c-d5de-4bf3-8738-09aec4d975da #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b59ab44c-d5de-4bf3-8738-09aec4d975da .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-16fecd5e-2e19-44c7-8692-89501710cfd3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16fecd5e-2e19-44c7-8692-89501710cfd3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/360b35bf-13f6-44e2-be3a-e911eac8f513"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/360b35bf-13f6-44e2-be3a-e911eac8f513"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-16fecd5e-2e19-44c7-8692-89501710cfd3 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_7": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_7": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-16fecd5e-2e19-44c7-8692-89501710cfd3 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-16fecd5e-2e19-44c7-8692-89501710cfd3 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eed7479b-c751-4fa1-a214-97f37bf42b4e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eed7479b-c751-4fa1-a214-97f37bf42b4e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eed7479b-c751-4fa1-a214-97f37bf42b4e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e3402d48-da11-4385-84a9-49124e685a90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e3402d48-da11-4385-84a9-49124e685a90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e3402d48-da11-4385-84a9-49124e685a90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d734cd03-c09a-4751-8a0c-e27f22c1d3fd .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-b48eeef7-645a-421a-8d68-89be55ae87d0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b48eeef7-645a-421a-8d68-89be55ae87d0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b48eeef7-645a-421a-8d68-89be55ae87d0 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b48eeef7-645a-421a-8d68-89be55ae87d0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d8a9f2bc-37f0-428a-b80f-cbe944234da0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df4b21a2-cd86-40d3-a1b6-98bb6d7dc968"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d8a9f2bc-37f0-428a-b80f-cbe944234da0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-b0256347-920e-4a96-b04f-c37067885e77 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16fecd5e-2e19-44c7-8692-89501710cfd3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16fecd5e-2e19-44c7-8692-89501710cfd3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/360b35bf-13f6-44e2-be3a-e911eac8f513"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b0256347-920e-4a96-b04f-c37067885e77 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_7": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_7": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b0256347-920e-4a96-b04f-c37067885e77 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b0256347-920e-4a96-b04f-c37067885e77 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-23e1529e-80e6-49fb-bd93-2b163a59a41a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              https://www.dropbox.com/s/hozdm56n55zd24g/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              https://www.dropbox.com/s/hozdm56n55zd24g/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              https://www.dropbox.com/s/hozdm56n55zd24g/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "target": "#s-Input_5"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "target": "#s-Input_8"
                        },{
                          "target": "#s-Input_6"
                        } ]
                      } ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-23e1529e-80e6-49fb-bd93-2b163a59a41a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_13": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-23e1529e-80e6-49fb-bd93-2b163a59a41a #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-23e1529e-80e6-49fb-bd93-2b163a59a41a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_13")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-46cc2ce7-f2b6-4ee1-9663-b06620a595cf .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-e3402d48-da11-4385-84a9-49124e685a90 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_5",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2a28a487-212b-4981-b03b-c9022b1d4241"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_5",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-e3402d48-da11-4385-84a9-49124e685a90 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_17": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_17": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_42": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-e3402d48-da11-4385-84a9-49124e685a90 #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-e3402d48-da11-4385-84a9-49124e685a90 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-ede22bf8-36ee-4711-8537-46af67ac8084 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ede22bf8-36ee-4711-8537-46af67ac8084 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ede22bf8-36ee-4711-8537-46af67ac8084 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ede22bf8-36ee-4711-8537-46af67ac8084 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-eed7479b-c751-4fa1-a214-97f37bf42b4e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rich_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/89821ff0-afa2-4f59-b184-25c9838c36e2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-eed7479b-c751-4fa1-a214-97f37bf42b4e .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_42": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_43": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-eed7479b-c751-4fa1-a214-97f37bf42b4e #s-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-eed7479b-c751-4fa1-a214-97f37bf42b4e .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_43")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-445d4dc5-3995-4aa9-93e0-64449f915e5e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/46cc2ce7-f2b6-4ee1-9663-b06620a595cf"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df4b21a2-cd86-40d3-a1b6-98bb6d7dc968"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-df4b21a2-cd86-40d3-a1b6-98bb6d7dc968 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-abbf570d-8795-46c6-ac05-58f32e93e24e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fd7a6a57-42fd-4e2a-9584-b8f582120847"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1d23446d-3c81-4f4a-ad7c-a06000186e97"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5ca1fe0c-ffd3-4891-aea1-b0fdf9392eb3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-8cdb0a9b-2807-4554-9070-64f774f6e903 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad910318-8dd8-4074-85ca-0cc3f45b8032"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad910318-8dd8-4074-85ca-0cc3f45b8032"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-8cdb0a9b-2807-4554-9070-64f774f6e903 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8cdb0a9b-2807-4554-9070-64f774f6e903 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8cdb0a9b-2807-4554-9070-64f774f6e903 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-2a28a487-212b-4981-b03b-c9022b1d4241 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rich_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-2a28a487-212b-4981-b03b-c9022b1d4241 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_42": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_43": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-2a28a487-212b-4981-b03b-c9022b1d4241 #s-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-2a28a487-212b-4981-b03b-c9022b1d4241 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_43")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-fd7a6a57-42fd-4e2a-9584-b8f582120847 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a72ed425-dbf5-444d-bb51-ac3d6c04e9f5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5ca1fe0c-ffd3-4891-aea1-b0fdf9392eb3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-02c14376-daf5-44cd-8f08-5503847fdd16 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://www.dropbox.com/s/ifrzi1jbghsqyo9/QF%201100.07%20Personal%20Plan%20Invite%20Letter.pdf"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-360b35bf-13f6-44e2-be3a-e911eac8f513 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b0256347-920e-4a96-b04f-c37067885e77"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16fecd5e-2e19-44c7-8692-89501710cfd3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/360b35bf-13f6-44e2-be3a-e911eac8f513"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/16fecd5e-2e19-44c7-8692-89501710cfd3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-360b35bf-13f6-44e2-be3a-e911eac8f513 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-360b35bf-13f6-44e2-be3a-e911eac8f513 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-360b35bf-13f6-44e2-be3a-e911eac8f513 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-88b558c9-8276-48d1-ac91-1024c3afcc90 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/58b182ee-de55-4f44-9352-6b6f90183f40",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/74df60da-34e7-4d90-8bbe-0086c8cb070c",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-871da563-d566-4c66-9de3-e882d2c2e5fe .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/360b35bf-13f6-44e2-be3a-e911eac8f513"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad910318-8dd8-4074-85ca-0cc3f45b8032"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-871da563-d566-4c66-9de3-e882d2c2e5fe .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Image_5",
                    "value": "./images/85ce0ba1-2652-4742-b5a9-8370ab332636.png"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-871da563-d566-4c66-9de3-e882d2c2e5fe .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-871da563-d566-4c66-9de3-e882d2c2e5fe .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "normal"
                      }
                    }
                  },{
                    "#s-871da563-d566-4c66-9de3-e882d2c2e5fe #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-871da563-d566-4c66-9de3-e882d2c2e5fe .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              https://www.dropbox.com/s/hozdm56n55zd24g/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              https://www.dropbox.com/s/hozdm56n55zd24g/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              https://www.dropbox.com/s/hozdm56n55zd24g/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/23e1529e-80e6-49fb-bd93-2b163a59a41a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_13": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d7c6c233-5a03-4bd7-b9bd-08c932e0bed9 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_13")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-ca0dae70-a80f-4846-9b04-4aab81e64c1a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              https://dl.dropboxusercontent.com/u/102501018/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 80,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              https://dl.dropboxusercontent.com/u/102501018/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 80,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              https://dl.dropboxusercontent.com/u/102501018/Risk%20Score%20Calculator.pdf\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 80,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_2",
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "target": "#s-Input_5"
                      },{
                        "action": "jimPlus",
                        "parameter": [ {
                          "target": "#s-Input_6"
                        },{
                          "target": "#s-Input_7"
                        } ]
                      } ]
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ca0dae70-a80f-4846-9b04-4aab81e64c1a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_13": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ca0dae70-a80f-4846-9b04-4aab81e64c1a #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ca0dae70-a80f-4846-9b04-4aab81e64c1a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_13")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-5ca1fe0c-ffd3-4891-aea1-b0fdf9392eb3 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a72ed425-dbf5-444d-bb51-ac3d6c04e9f5"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5ca1fe0c-ffd3-4891-aea1-b0fdf9392eb3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca0dae70-a80f-4846-9b04-4aab81e64c1a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f25de24a-fdc3-47be-a55e-dbaa116e70ff"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_13": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-5e03310e-ca6f-427b-9d85-c1b8bccbf3e0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_13")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/59923e68-3293-4517-a24a-a82e421e0d47"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image#moz": "-moz-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#EFEFEF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image#moz": "-moz-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#EFEFEF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f8b0777f-0dc2-477a-8448-5f7de88b47c2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-17e063ad-8834-4ef2-aa14-8b15985c923a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-17e063ad-8834-4ef2-aa14-8b15985c923a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-17e063ad-8834-4ef2-aa14-8b15985c923a #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-17e063ad-8834-4ef2-aa14-8b15985c923a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-213f5d6a-0cb9-463a-a17a-44a8d0d55353 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "\n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              \n              http://www.endeavour.com.au/\n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            \n              \n            ",
                    "popup": {
                      "width": 200,
                      "height": 200,
                      "iscentered": false,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/445d4dc5-3995-4aa9-93e0-64449f915e5e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-b599290e-be45-4a14-aa02-617004f9ded2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-b599290e-be45-4a14-aa02-617004f9ded2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-b599290e-be45-4a14-aa02-617004f9ded2 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-b599290e-be45-4a14-aa02-617004f9ded2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d8a9f2bc-37f0-428a-b80f-cbe944234da0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_8"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e595aeb-e5cb-44e4-a744-4abc3933dc27"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-d8a9f2bc-37f0-428a-b80f-cbe944234da0 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-bb0e12b6-1a98-4279-8540-318e5000bdc1 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df4b21a2-cd86-40d3-a1b6-98bb6d7dc968"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df4b21a2-cd86-40d3-a1b6-98bb6d7dc968"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-bb0e12b6-1a98-4279-8540-318e5000bdc1 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-bb0e12b6-1a98-4279-8540-318e5000bdc1 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-bb0e12b6-1a98-4279-8540-318e5000bdc1 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Input_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Input_4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02c14376-daf5-44cd-8f08-5503847fdd16",
                    "popup": {
                      "width": 635,
                      "height": 680,
                      "iscentered": true,
                      "top": 20,
                      "left": 20,
                      "hasscrollbars": "yes",
                      "isresizable": "yes"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8b0777f-0dc2-477a-8448-5f7de88b47c2"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8b0777f-0dc2-477a-8448-5f7de88b47c2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image#moz": "-moz-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#EFEFEF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(161 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(23 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(161 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(23 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_8": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_8": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "13px 13px 13px 13px",
                        "padding-top": "7px",
                        "padding-right": "7px",
                        "padding-bottom": "7px",
                        "padding-left": "7px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(447 - 1 - 1 - 7 - 7, 0) + 'px'",
                        "height": "Math.max(117 - 1 - 1 - 7 - 7, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions": {
                        "width": "Math.max(161 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(23 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "2px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(161 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(23 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Button_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image#moz": "-moz-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#EFEFEF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#EFEFEF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-58b182ee-de55-4f44-9352-6b6f90183f40 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#EFEFEF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-58b182ee-de55-4f44-9352-6b6f90183f40 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_4")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-a72ed425-dbf5-444d-bb51-ac3d6c04e9f5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d8a9f2bc-37f0-428a-b80f-cbe944234da0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-f25de24a-fdc3-47be-a55e-dbaa116e70ff .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_cell_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7c6c233-5a03-4bd7-b9bd-08c932e0bed9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f25de24a-fdc3-47be-a55e-dbaa116e70ff .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_13": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-f25de24a-fdc3-47be-a55e-dbaa116e70ff #s-Label_13": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f25de24a-fdc3-47be-a55e-dbaa116e70ff .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_13")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-ad910318-8dd8-4074-85ca-0cc3f45b8032 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ad910318-8dd8-4074-85ca-0cc3f45b8032"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-ad910318-8dd8-4074-85ca-0cc3f45b8032 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ad910318-8dd8-4074-85ca-0cc3f45b8032 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ad910318-8dd8-4074-85ca-0cc3f45b8032 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-846ff8af-276f-4aa7-836d-33c286442143 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-846ff8af-276f-4aa7-836d-33c286442143 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-846ff8af-276f-4aa7-836d-33c286442143 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-846ff8af-276f-4aa7-836d-33c286442143 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-8ce042cb-6ec0-4728-8929-188370859a5c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8cdb0a9b-2807-4554-9070-64f774f6e903"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-8ce042cb-6ec0-4728-8929-188370859a5c .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-8ce042cb-6ec0-4728-8929-188370859a5c #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-8ce042cb-6ec0-4728-8929-188370859a5c .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-89821ff0-afa2-4f59-b184-25c9838c36e2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rich_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_2",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_4",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d48cfbbf-8321-45e5-8262-e7bed6d7b46b"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5e03310e-ca6f-427b-9d85-c1b8bccbf3e0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-89821ff0-afa2-4f59-b184-25c9838c36e2 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_42") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_42": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_42": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_43") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_43": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-89821ff0-afa2-4f59-b184-25c9838c36e2 #s-Label_43": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-89821ff0-afa2-4f59-b184-25c9838c36e2 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_42")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_43")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-74df60da-34e7-4d90-8bbe-0086c8cb070c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-USER1",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Users' service list",
                          "value": {
                            "target": "#s-Input_1"
                          }
                        },
                        "value": {
                          "target": "#s-Input_2"
                        }
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8b0777f-0dc2-477a-8448-5f7de88b47c2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8b0777f-0dc2-477a-8448-5f7de88b47c2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/88b558c9-8276-48d1-ac91-1024c3afcc90"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click");
  });jQuery("#simulation")
  .on("click", ".s-72d81d72-9ecb-4d9f-8f8f-11898226333d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/72d81d72-9ecb-4d9f-8f8f-11898226333d"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f2c72c18-7c49-4bc8-82eb-f4660b9ab6d6"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc7324b8-8b56-4e2c-a85b-eab61032c7f9"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/871da563-d566-4c66-9de3-e882d2c2e5fe"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bb0e12b6-1a98-4279-8540-318e5000bdc1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ede22bf8-36ee-4711-8537-46af67ac8084"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/846ff8af-276f-4aa7-836d-33c286442143"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/17e063ad-8834-4ef2-aa14-8b15985c923a"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b48eeef7-645a-421a-8d68-89be55ae87d0"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/abbf570d-8795-46c6-ac05-58f32e93e24e"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/213f5d6a-0cb9-463a-a17a-44a8d0d55353"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b599290e-be45-4a14-aa02-617004f9ded2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f5514ea9-f647-4059-8b9f-5686f93c4b5f"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-72d81d72-9ecb-4d9f-8f8f-11898226333d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_6": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_6": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_8": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_8": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-72d81d72-9ecb-4d9f-8f8f-11898226333d #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-72d81d72-9ecb-4d9f-8f8f-11898226333d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    }
  });