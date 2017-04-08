import {expect, spy, dom} from 'mochaccino';
// import {jquery}
import { TsCommonUnitl } from './index';
function beforeAll(callable){
   before(()=>{
     callable();
   }) 
}
describe('SharedSingleton module', ()=>{
    describe('responsive layout helpers', ()=>{
        beforeAll(()=>{
            TsCommonUnitl.setXs(false);
            TsCommonUnitl.setSm(false);
            TsCommonUnitl.setMd(false);
            TsCommonUnitl.setLg(false);
            TsCommonUnitl.setXl(false);
        })
        it('isXs should return the value set by setXs', ()=>{
            TsCommonUnitl.setXs(true);
            expect(TsCommonUnitl.isXs()).toBe(true);
        })
        it('isSm should return the value set by setSm', ()=>{
            TsCommonUnitl.setSm(true);
            expect(TsCommonUnitl.isSm()).toBe(true);
        })
        it('isMd should return the value set by setMd', ()=>{
            TsCommonUnitl.setMd(true);
            expect(TsCommonUnitl.isMd()).toBe(true);
        })
        it('isLg should return the value set by setLg', ()=>{
            TsCommonUnitl.setLg(true);
            expect(TsCommonUnitl.isLg()).toBe(true);
        })
        it('isXl should return the value set by setXl', ()=>{
            TsCommonUnitl.setXl(true);
            expect(TsCommonUnitl.isXl()).toBe(true);
        })
    })

    describe('List item view helpers', ()=>{
       it('isItemExpandedMode should return the value set by setItemExpandedMode', ()=>{
            TsCommonUnitl.setItemExpandedMode(true);
            expect(TsCommonUnitl.isItemExpandedMode()).toBe(true);
        })
       it('isDistractionFreeMode should return the value set by setDistractionFreeMode', ()=>{
            TsCommonUnitl.setDistractionFreeMode(true);
            expect(TsCommonUnitl.isDistractionFreeMode()).toBe(true);
        })
    })
    describe('Content manupulation helpers', ()=>{
       it('stripHtml should return non-html version of any html string passed into it', ()=>{
            expect(TsCommonUnitl.stripHtml('<a></a>')).toEqual('');
            expect(TsCommonUnitl.stripHtml('<a:b></a:b>')).toEqual('');
            expect(TsCommonUnitl.stripHtml('<a></abd>')).toEqual('');
            expect(TsCommonUnitl.stripHtml('<a>1234</abd>')).toEqual('1234');
            expect(TsCommonUnitl.stripHtml('<a>1234/<.?></a>')).toEqual('1234/');
            expect(TsCommonUnitl.stripHtml('<a/>1234/<.?></a>')).toEqual('1234/');
            expect(TsCommonUnitl.stripHtml('&lt;a/&gt;1234/<.?></a>')).toEqual('&lt;a/&gt;1234/');
        })

        it('toUpperFirstLetter should return Capitalized version of a word passed to it', ()=>{
            expect(TsCommonUnitl.toUpperFirstLetter('page')).toBe('Page');
            expect(TsCommonUnitl.toUpperFirstLetter('state   ')).toBe('State   ');
            expect(TsCommonUnitl.toUpperFirstLetter('Monkey')).toBe('Monkey');
            expect(TsCommonUnitl.toUpperFirstLetter('key')).toBe('Key');
        })
        it('pluralize should return pluralized version when a singular word is passed to it as the only parameter', ()=>{
            expect(TsCommonUnitl.pluralize('page   ')).toBe('pages');
            expect(TsCommonUnitl.pluralize('state ')).toBe('states');
            expect(TsCommonUnitl.pluralize('monkey')).toBe('monkeys');
            expect(TsCommonUnitl.pluralize('key         ')).toBe('keys');
            expect(TsCommonUnitl.pluralize('quiz')).toBe('quizzes');
            expect(TsCommonUnitl.pluralize('sheep')).toBe('sheep');
            expect(TsCommonUnitl.pluralize('money')).toBe('money');
        })
        it('pluralize should return singular version when a plural form of word is passed to it together with revert parameter as true', ()=>{
            expect(TsCommonUnitl.pluralize('pages   ', true)).toBe('page');
            expect(TsCommonUnitl.pluralize('states ', true)).toBe('state');
            expect(TsCommonUnitl.pluralize('monkeys', true)).toBe('monkey');
            expect(TsCommonUnitl.pluralize('keys         ', true)).toBe('key');
            expect(TsCommonUnitl.pluralize('quizzes', true)).toBe('quiz');
            expect(TsCommonUnitl.pluralize('sheep', true)).toBe('sheep');
            expect(TsCommonUnitl.pluralize('money', true)).toBe('money');
        })
        it('toPluralModelName should return pluralized and Capitalized version of any word passed to it', ()=>{
            expect(TsCommonUnitl.toPluralModelName('page   ')).toBe('Pages');
            expect(TsCommonUnitl.toPluralModelName('page   ')).toBe('Pages');
            expect(TsCommonUnitl.toPluralModelName('state ')).toBe('States');
            expect(TsCommonUnitl.toPluralModelName('monkey      ')).toBe('Monkeys');
            expect(TsCommonUnitl.toPluralModelName('key')).toBe('Keys');
        })
        it('toSingularModelName should return pluralized and Capitalized version of any word passed to it', ()=>{
            expect(TsCommonUnitl.toSingularModelName('pages   ')).toBe('Page');
            expect(TsCommonUnitl.toSingularModelName('pages   ')).toBe('Page');
            expect(TsCommonUnitl.toSingularModelName('states ')).toBe('State');
            expect(TsCommonUnitl.toSingularModelName('monkeys      ')).toBe('Monkey');
            expect(TsCommonUnitl.toSingularModelName('keys')).toBe('Key');
        })
      
    })
    
})