import  {assert} from 'chai';
import {sandbox as snd, SinonExpectation} from 'sinon';
import * as resp from './index';
import { TsResponsive } from './index';

var sandbox;
describe.only('TsResponsive', ()=>{
    describe('On Init', () => {
        before(()=>{
            sandbox = snd.create();
            //sandbox.stub(TsResponsive, 'calculateSizes');
        });

        it('should calculate breakpoint sizes', () => {

        });
            
    });
        
})