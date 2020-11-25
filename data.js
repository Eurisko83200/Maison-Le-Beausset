var APP_DATA = {
  "scenes": [
    {
      "id": "0-alle",
      "name": "Allée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.00518951000000456,
        "pitch": 0,
        "fov": 1.3742373460664081
      },
      "linkHotspots": [
        {
          "yaw": -0.2589054520585172,
          "pitch": -0.03456431431619933,
          "rotation": 6.283185307179586,
          "target": "1-faade-et-jardin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-faade-et-jardin",
      "name": "façade et jardin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2431352928864605,
          "pitch": -0.014240395903136971,
          "rotation": 1.5707963267948966,
          "target": "0-alle"
        },
        {
          "yaw": 0.44503981364672107,
          "pitch": -0.032057834632796656,
          "rotation": 1.5707963267948966,
          "target": "5-entre"
        },
        {
          "yaw": -0.17486182769343728,
          "pitch": 0.014268393106274146,
          "rotation": 0,
          "target": "12-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7941375736343623,
          "pitch": 0.005806201244668685,
          "rotation": 0,
          "target": "3-salle--manger"
        },
        {
          "yaw": 0.3627084333419486,
          "pitch": -0.018469816246909687,
          "rotation": 4.71238898038469,
          "target": "4-cuisine"
        },
        {
          "yaw": 2.089317298169595,
          "pitch": 0.008514782121967102,
          "rotation": 1.5707963267948966,
          "target": "5-entre"
        },
        {
          "yaw": -1.0056223883693551,
          "pitch": -0.02899504205886494,
          "rotation": 4.71238898038469,
          "target": "12-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salle--manger",
      "name": "Salle à manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8190193529615328,
          "pitch": 0.017690306693285862,
          "rotation": 0,
          "target": "5-entre"
        },
        {
          "yaw": 2.456895870412705,
          "pitch": 0.005645744261771668,
          "rotation": 3.141592653589793,
          "target": "2-salon"
        },
        {
          "yaw": -2.644435866742688,
          "pitch": -0.004995910435365403,
          "rotation": 1.5707963267948966,
          "target": "4-cuisine"
        },
        {
          "yaw": 3.026066085238006,
          "pitch": 0.03370227014886851,
          "rotation": 1.5707963267948966,
          "target": "12-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9137922829150114,
          "pitch": 0.17564535401017167,
          "rotation": 0,
          "target": "12-terrasse"
        },
        {
          "yaw": -0.3328300246265883,
          "pitch": 0.09180329073104687,
          "rotation": 4.71238898038469,
          "target": "3-salle--manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entre",
      "name": "Entrée",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.017026781899993182,
          "pitch": -0.018790807655872044,
          "rotation": 0,
          "target": "3-salle--manger"
        },
        {
          "yaw": -0.3179887677272806,
          "pitch": -0.02692168520541749,
          "rotation": 0,
          "target": "4-cuisine"
        },
        {
          "yaw": -1.899673982978138,
          "pitch": -0.033726751924337606,
          "rotation": 4.71238898038469,
          "target": "1-faade-et-jardin"
        },
        {
          "yaw": 2.7591172050515436,
          "pitch": 0.2933708154630743,
          "rotation": 0,
          "target": "6-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-couloir",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5205033008551432,
          "pitch": 0.06399790787786941,
          "rotation": 0,
          "target": "10-salle-de-bain"
        },
        {
          "yaw": 2.9198887170795853,
          "pitch": 0.040731121071704735,
          "rotation": 0,
          "target": "11-studio"
        },
        {
          "yaw": -2.7122424803362613,
          "pitch": 0.022458321592385033,
          "rotation": 0,
          "target": "9-wc"
        },
        {
          "yaw": -0.7399115275453436,
          "pitch": 0.05086555784246727,
          "rotation": 4.71238898038469,
          "target": "8-chambre-2"
        },
        {
          "yaw": -0.2253533643914274,
          "pitch": 0.03277069231651453,
          "rotation": 0,
          "target": "7-chambre-1"
        },
        {
          "yaw": 0.3142694028978781,
          "pitch": 0.2754717582995987,
          "rotation": 0,
          "target": "5-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-chambre-1",
      "name": "Chambre 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.175903113876201,
          "pitch": 0.05298633856641999,
          "rotation": 0,
          "target": "6-couloir"
        },
        {
          "yaw": -2.0370659306073566,
          "pitch": 0.015529176762324681,
          "rotation": 4.71238898038469,
          "target": "1-faade-et-jardin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-chambre-2",
      "name": "Chambre 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5258106684834694,
          "pitch": 0.052126311071255316,
          "rotation": 0,
          "target": "6-couloir"
        },
        {
          "yaw": -0.829047891195577,
          "pitch": 0.011700454312340014,
          "rotation": 1.5707963267948966,
          "target": "1-faade-et-jardin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5118772081365393,
          "pitch": 0.617489592098913,
          "rotation": 0,
          "target": "6-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-salle-de-bain",
      "name": "Salle de bain",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8076380618278645,
          "pitch": 0.004677978958032014,
          "rotation": 0,
          "target": "6-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-studio",
      "name": "Studio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.851521809757676,
          "pitch": 0.008164235609397608,
          "rotation": 4.71238898038469,
          "target": "6-couloir"
        },
        {
          "yaw": -1.058325860393273,
          "pitch": -0.05521501164712639,
          "rotation": 1.5707963267948966,
          "target": "0-alle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5497578795242486,
          "pitch": 0.0005678749133508632,
          "rotation": 0,
          "target": "4-cuisine"
        },
        {
          "yaw": -1.9170430071060238,
          "pitch": 0.09180211382933123,
          "rotation": 0,
          "target": "1-faade-et-jardin"
        },
        {
          "yaw": -2.6305763495216077,
          "pitch": 0.01594992554794672,
          "rotation": 4.71238898038469,
          "target": "2-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Jacques Silman",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
