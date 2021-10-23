import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
      "width": 239,
      "rotate": 0,
      "fill": "rgba(236, 181, 114, 1)",
      "strokeWidth": 0,
      "blendMode": "normal",
      "elementType": "ellipse",
      "x": 116,
      "y": 34.5625,
      "height": null
    }, {
      "fill": "rgba(220, 134, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 47,
      "moveY": 65.5625,
      "path": [{"x1": 47, "y1": 65.5625, "x2": 57, "y2": 61.5625, "x": 57, "y": 61.5625}, {
        "x1": 57,
        "y1": 61.5625,
        "x2": 182,
        "y2": 356.5625,
        "x": 182,
        "y": 356.5625
      }, {"x1": 182, "y1": 356.5625, "x2": 171, "y2": 362.5625, "x": 171, "y": 362.5625}, {
        "x1": 171,
        "y1": 362.5625,
        "x2": 47,
        "y2": 65.5625,
        "x": 47,
        "y": 65.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 47,
      "y": 65.5625
    }, {
      "fill": "rgba(160, 41, 1, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 22,
      "moveY": 259.5625,
      "path": [{"x1": 22, "y1": 259.5625, "x2": 53, "y2": 244.5625, "x": 53, "y": 244.5625}, {
        "x1": 53,
        "y1": 244.5625,
        "x2": 71,
        "y2": 278.5625,
        "x": 71,
        "y": 278.5625
      }, {"x1": 71, "y1": 278.5625, "x2": 43, "y2": 297.5625, "x": 43, "y": 297.5625}, {
        "x1": 43,
        "y1": 297.5625,
        "x2": 22,
        "y2": 259.5625,
        "x": 22,
        "y": 259.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 22,
      "y": 259.5625
    }, {
      "fill": "rgba(135, 103, 82, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 47,
      "moveY": 212.5625,
      "path": [{"x1": 47, "y1": 212.5625, "x2": 69, "y2": 200.5625, "x": 69, "y": 200.5625}, {
        "x1": 69,
        "y1": 200.5625,
        "x2": 99,
        "y2": 274.5625,
        "x": 99,
        "y": 274.5625
      }, {"x1": 99, "y1": 274.5625, "x2": 76, "y2": 283.5625, "x": 76, "y": 283.5625}, {
        "x1": 76,
        "y1": 283.5625,
        "x2": 47,
        "y2": 212.5625,
        "x": 47,
        "y": 212.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 48,
      "y": 212.5625
    }, {
      "fill": "rgba(220, 134, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 71,
      "moveY": 183.5625,
      "path": [{"x1": 71, "y1": 183.5625, "x2": 80, "y2": 178.5625, "x": 80, "y": 178.5625}, {
        "x1": 80,
        "y1": 178.5625,
        "x2": 114,
        "y2": 275.5625,
        "x": 114,
        "y": 275.5625
      }, {"x1": 114, "y1": 275.5625, "x2": 106, "y2": 278.5625, "x": 106, "y": 278.5625}, {
        "x1": 106,
        "y1": 278.5625,
        "x2": 71,
        "y2": 183.5625,
        "x": 71,
        "y": 183.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 71,
      "y": 183.5625
    }, {
      "fill": "rgba(111, 134, 124, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 77,
      "moveY": 314.5625,
      "path": [{"x1": 77, "y1": 314.5625, "x2": 181, "y2": 256.5625, "x": 181, "y": 256.5625}, {
        "x1": 181,
        "y1": 256.5625,
        "x2": 208,
        "y2": 307.5625,
        "x": 208,
        "y": 307.5625
      }, {"x1": 208, "y1": 307.5625, "x2": 106, "y2": 365.5625, "x": 106, "y": 365.5625}, {
        "x1": 106,
        "y1": 365.5625,
        "x2": 77,
        "y2": 314.5625,
        "x": 77,
        "y": 314.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 77,
      "y": 314.5625
    }, {
      "fill": "rgba(111, 134, 124, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 178,
      "moveY": 385.5625,
      "path": [{"x1": 178, "y1": 385.5625, "x2": 197, "y2": 377.5625, "x": 197, "y": 377.5625}, {
        "x1": 197,
        "y1": 377.5625,
        "x2": 202,
        "y2": 387.5625,
        "x": 202,
        "y": 387.5625
      }, {"x1": 202, "y1": 387.5625, "x2": 183, "y2": 397.5625, "x": 183, "y": 397.5625}, {
        "x1": 183,
        "y1": 397.5625,
        "x2": 178,
        "y2": 385.5625,
        "x": 178,
        "y": 385.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 176,
      "y": 381.5625
    }, {
      "fill": "rgba(163, 172, 127, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 96,
      "moveY": 6.5625,
      "path": [{"x1": 96, "y1": 6.5625, "x2": 96, "y2": 70.5625, "x": 96, "y": 70.5625}, {
        "x1": 96,
        "y1": 70.5625,
        "x2": 104,
        "y2": 70.5625,
        "x": 104,
        "y": 70.5625
      }, {"x1": 104, "y1": 70.5625, "x2": 106, "y2": 8.5625, "x": 106, "y": 8.5625}, {
        "x1": 106,
        "y1": 8.5625,
        "x2": 96,
        "y2": 6.5625,
        "x": 96,
        "y": 6.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 96,
      "y": 6.5625
    }, {
      "fill": "rgba(163, 172, 127, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 70,
      "moveY": 39.5625,
      "path": [{"x1": 70, "y1": 39.5625, "x2": 124, "y2": 32.5625, "x": 124, "y": 32.5625}, {
        "x1": 124,
        "y1": 32.5625,
        "x2": 124,
        "y2": 43.5625,
        "x": 124,
        "y": 43.5625
      }, {"x1": 124, "y1": 43.5625, "x2": 72, "y2": 49.5625, "x": 72, "y": 49.5625}, {
        "x1": 72,
        "y1": 49.5625,
        "x2": 70,
        "y2": 39.5625,
        "x": 70,
        "y": 39.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 70,
      "y": 39.5625
    }, {
      "fill": "rgba(69, 69, 41, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 87,
      "moveY": 53.5625,
      "path": [{"x1": 87, "y1": 53.5625, "x2": 116, "y2": 49.5625, "x": 116, "y": 49.5625}, {
        "x1": 116,
        "y1": 49.5625,
        "x2": 118,
        "y2": 59.5625,
        "x": 118,
        "y": 59.5625
      }, {"x1": 118, "y1": 59.5625, "x2": 89, "y2": 63.5625, "x": 89, "y": 63.5625}, {
        "x1": 89,
        "y1": 63.5625,
        "x2": 87,
        "y2": 53.5625,
        "x": 87,
        "y": 53.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 86,
      "y": 51.5625
    }, {
      "fill": "rgba(206, 67, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 123,
      "moveY": 168.5625,
      "path": [{"x1": 123, "y1": 168.5625, "x2": 349, "y2": 36.5625, "x": 349, "y": 36.5625}, {
        "x1": 349,
        "y1": 36.5625,
        "x2": 349,
        "y2": 50.5625,
        "x": 349,
        "y": 50.5625
      }, {"x1": 349, "y1": 50.5625, "x2": 136, "y2": 193.5625, "x": 136, "y": 193.5625}, {
        "x1": 136,
        "y1": 193.5625,
        "x2": 123,
        "y2": 168.5625,
        "x": 123,
        "y": 168.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 123,
      "y": 168.5625
    }, {
      "fill": "rgba(0, 0, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 135,
      "moveY": 120.5625,
      "path": [{"x1": 135, "y1": 120.5625, "x2": 154, "y2": 112.5625, "x": 154, "y": 112.5625}, {
        "x1": 154,
        "y1": 112.5625,
        "x2": 203,
        "y2": 216.5625,
        "x": 203,
        "y": 216.5625
      }, {"x1": 203, "y1": 216.5625, "x2": 184, "y2": 226.5625, "x": 184, "y": 226.5625}, {
        "x1": 184,
        "y1": 226.5625,
        "x2": 135,
        "y2": 120.5625,
        "x": 135,
        "y": 120.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 135,
      "y": 120.5625
    }, {
      "fill": "rgba(133, 34, 8, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 337,
      "moveY": 78.5625,
      "path": [{"x1": 337, "y1": 78.5625, "x2": 346, "y2": 92.5625, "x": 346, "y": 92.5625}, {
        "x1": 346,
        "y1": 92.5625,
        "x2": 252,
        "y2": 183.5625,
        "x": 252,
        "y": 183.5625
      }, {"x1": 252, "y1": 183.5625, "x2": 236, "y2": 161.5625, "x": 236, "y": 161.5625}, {
        "x1": 236,
        "y1": 161.5625,
        "x2": 337,
        "y2": 78.5625,
        "x": 337,
        "y": 78.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 337,
      "y": 78.5625
    }, {
      "fill": "rgba(0, 0, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 138,
      "moveY": 51.5625,
      "path": [{"x1": 138, "y1": 51.5625, "x2": 152, "y2": 45.5625, "x": 152, "y": 45.5625}, {
        "x1": 152,
        "y1": 45.5625,
        "x2": 247,
        "y2": 246.5625,
        "x": 247,
        "y": 246.5625
      }, {"x1": 247, "y1": 246.5625, "x2": 226, "y2": 257.5625, "x": 226, "y": 257.5625}, {
        "x1": 226,
        "y1": 257.5625,
        "x2": 138,
        "y2": 51.5625,
        "x": 138,
        "y": 51.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 138,
      "y": 51.5625
    }, {
      "fill": "rgba(0, 0, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 8,
      "moveY": 292.5625,
      "path": [{"x1": 8, "y1": 292.5625, "x2": 15, "y2": 303.5625, "x": 15, "y": 303.5625}, {
        "x1": 15,
        "y1": 303.5625,
        "x2": 255,
        "y2": 135.5625,
        "x": 255,
        "y": 135.5625
      }, {"x1": 255, "y1": 135.5625, "x2": 252, "y2": 130.5625, "x": 252, "y": 130.5625}, {
        "x1": 252,
        "y1": 130.5625,
        "x2": 8,
        "y2": 292.5625,
        "x": 8,
        "y": 292.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 8,
      "y": 292.5625
    }, {
      "fill": "rgba(0, 0, 0, 1)",
      "closed": true,
      "rotate": 0,
      "moveX": 314,
      "moveY": 6.5625,
      "path": [{"x1": 266, "y1": 49.5625, "x2": 224, "y2": 49.5625, "x": 204, "y": 69.5625}, {
        "x1": 169,
        "y1": 99.5625,
        "x2": 189,
        "y2": 152.5625,
        "x": 243,
        "y": 125.5625
      }, {"x1": 275, "y1": 109.5625, "x2": 288, "y2": 72.5625, "x": 307, "y": 26.5625}, {
        "x1": 321,
        "y1": -5.4375,
        "x2": 314,
        "y2": 6.5625,
        "x": 314,
        "y": 6.5625
      }],
      "stroke": "gray",
      "strokeWidth": "0",
      "elementType": "polygon",
      "x": 316,
      "y": -7.4375
    }]
  };

  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <Designer
        width={350} height={400}
        background={"#ece2be"}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}
