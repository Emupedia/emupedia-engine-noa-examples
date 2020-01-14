

/* 
 *
 *
 *      Testbed.
 *
 * 
 */


import Engine from 'noa-engine'
import { initRegistration } from './registration'
import { initWorldGen } from './worldgen'
import { setupPlayerEntity } from './entities'
import { setupInteractions } from './actions'



// create engine
var noa = new Engine({
    debug: true,
    showFPS: true,
    inverseY: true,
    inverseX: false,
    chunkSize: 32,
    chunkAddDistance: 2.5,
    chunkRemoveDistance: 3,
    blockTestDistance: 50,
    texturePath: 'textures/',
    playerStart: [0.5, 5, 0.5],
    playerHeight: 1.4,
    playerWidth: 0.6,
    playerAutoStep: true,
    useAO: true,
    AOmultipliers: [0.92, 0.8, 0.5],
    reverseAOmultiplier: 1.0,
})


// this registers all the blocks and materials
var blockIDs = initRegistration(noa)

// this sets up worldgen
initWorldGen(noa, blockIDs)

// adds a mesh to player
setupPlayerEntity(noa)

// does stuff on button presses
setupInteractions(noa)

