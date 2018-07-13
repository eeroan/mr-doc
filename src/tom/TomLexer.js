"use strict";
// Generated from TomLexer.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Decorators_1 = require("antlr4ts/Decorators");
const Decorators_2 = require("antlr4ts/Decorators");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class TomLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(TomLexer._ATN, this);
    }
    get vocabulary() {
        return TomLexer.VOCABULARY;
    }
    get grammarFileName() { return "TomLexer.g4"; }
    get ruleNames() { return TomLexer.ruleNames; }
    get serializedATN() { return TomLexer._serializedATN; }
    get modeNames() { return TomLexer.modeNames; }
    action(_localctx, ruleIndex, actionIndex) {
        switch (ruleIndex) {
            case 50:
                this.ID_action(_localctx, actionIndex);
                break;
        }
    }
    ID_action(_localctx, actionIndex) {
        if (this.text == "true" || this.text == "false")
            this.type = TomLexer.BooleanLiteral;
        if (this.text == "null" || this.text == "undefined")
            this.type = TomLexer.NullLiteral;
    }
    static get _ATN() {
        if (!TomLexer.__ATN) {
            TomLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(TomLexer._serializedATN));
        }
        return TomLexer.__ATN;
    }
}
TomLexer.IntegerLiteral = 1;
TomLexer.FloatingPointLiteral = 2;
TomLexer.BooleanLiteral = 3;
TomLexer.CharacterLiteral = 4;
TomLexer.StringLiteral = 5;
TomLexer.NullLiteral = 6;
TomLexer.ID = 7;
TomLexer.NEWLINE = 8;
TomLexer.SPACE = 9;
TomLexer.TEXT_CONTENT = 10;
TomLexer.AT = 11;
TomLexer.PLUS = 12;
TomLexer.MINUS = 13;
TomLexer.STAR = 14;
TomLexer.FORWARD_SLASH = 15;
TomLexer.COLON = 16;
TomLexer.PERIOD = 17;
TomLexer.COMMA = 18;
TomLexer.EQUAL = 19;
TomLexer.QUESTION = 20;
TomLexer.AMP = 21;
TomLexer.PIPE = 22;
TomLexer.ARROW = 23;
TomLexer.EXCLAMATION = 24;
TomLexer.INLINE_TAG_START = 25;
TomLexer.BRACE_OPEN = 26;
TomLexer.BRACE_CLOSE = 27;
TomLexer.PAREN_OPEN = 28;
TomLexer.PAREN_CLOSE = 29;
TomLexer.BRACKET_OPEN = 30;
TomLexer.BRACKET_CLOSE = 31;
TomLexer.modeNames = [
    "DEFAULT_MODE"
];
TomLexer.ruleNames = [
    "IntegerLiteral", "DecimalIntegerLiteral", "HexIntegerLiteral", "OctalIntegerLiteral",
    "BinaryIntegerLiteral", "IntegerTypeSuffix", "DecimalNumeral", "Digits",
    "Digit", "NonZeroDigit", "DigitsAndUnderscores", "DigitOrUnderscore",
    "Underscores", "HexNumeral", "HexDigits", "HexDigit", "HexDigitsAndUnderscores",
    "HexDigitOrUnderscore", "OctalNumeral", "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores",
    "OctalDigitOrUnderscore", "BinaryNumeral", "BinaryDigits", "BinaryDigit",
    "BinaryDigitsAndUnderscores", "BinaryDigitOrUnderscore", "FloatingPointLiteral",
    "DecimalFloatingPointLiteral", "ExponentPart", "ExponentIndicator", "SignedInteger",
    "Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral", "HexSignificand",
    "BinaryExponent", "BinaryExponentIndicator", "BooleanLiteral", "CharacterLiteral",
    "SingleCharacter", "StringLiteral", "StringCharacters", "StringCharacter",
    "EscapeSequence", "OctalEscape", "ZeroToThree", "UnicodeEscape", "NullLiteral",
    "ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR",
    "FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP",
    "PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE",
    "PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", "LETTER",
    "DIGIT"
];
TomLexer._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, "'@'", "'+'", "'-'", "'*'",
    "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", "'|'", undefined, "'!'",
    "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'"
];
TomLexer._SYMBOLIC_NAMES = [
    undefined, "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral",
    "CharacterLiteral", "StringLiteral", "NullLiteral", "ID", "NEWLINE", "SPACE",
    "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", "COLON",
    "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", "EXCLAMATION",
    "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE",
    "BRACKET_OPEN", "BRACKET_CLOSE"
];
TomLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(TomLexer._LITERAL_NAMES, TomLexer._SYMBOLIC_NAMES, []);
TomLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02!\u021B\b\x01" +
    "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
    "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
    "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
    "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
    "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
    "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
    "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x03" +
    "\x02\x03\x02\x03\x02\x03\x02\x05\x02\xA2\n\x02\x03\x03\x03\x03\x05\x03" +
    "\xA6\n\x03\x03\x04\x03\x04\x05\x04\xAA\n\x04\x03\x05\x03\x05\x05\x05\xAE" +
    "\n\x05\x03\x06\x03\x06\x05\x06\xB2\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03" +
    "\b\x05\b\xB9\n\b\x03\b\x03\b\x03\b\x05\b\xBE\n\b\x05\b\xC0\n\b\x03\t\x03" +
    "\t\x05\t\xC4\n\t\x03\t\x05\t\xC7\n\t\x03\n\x03\n\x05\n\xCB\n\n\x03\v\x03" +
    "\v\x03\f\x06\f\xD0\n\f\r\f\x0E\f\xD1\x03\r\x03\r\x05\r\xD6\n\r\x03\x0E" +
    "\x06\x0E\xD9\n\x0E\r\x0E\x0E\x0E\xDA\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x10\x03\x10\x05\x10\xE3\n\x10\x03\x10\x05\x10\xE6\n\x10\x03\x11\x03\x11" +
    "\x03\x12\x06\x12\xEB\n\x12\r\x12\x0E\x12\xEC\x03\x13\x03\x13\x05\x13\xF1" +
    "\n\x13\x03\x14\x03\x14\x05\x14\xF5\n\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
    "\x05\x15\xFB\n\x15\x03\x15\x05\x15\xFE\n\x15\x03\x16\x03\x16\x03\x17\x06" +
    "\x17\u0103\n\x17\r\x17\x0E\x17\u0104\x03\x18\x03\x18\x05\x18\u0109\n\x18" +
    "\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u0111\n\x1A\x03" +
    "\x1A\x05\x1A\u0114\n\x1A\x03\x1B\x03\x1B\x03\x1C\x06\x1C\u0119\n\x1C\r" +
    "\x1C\x0E\x1C\u011A\x03\x1D\x03\x1D\x05\x1D\u011F\n\x1D\x03\x1E\x03\x1E" +
    "\x05\x1E\u0123\n\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0128\n\x1F\x03\x1F" +
    "\x05\x1F\u012B\n\x1F\x03\x1F\x05\x1F\u012E\n\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x05\x1F\u0133\n\x1F\x03\x1F\x05\x1F\u0136\n\x1F\x03\x1F\x03\x1F\x03\x1F" +
    "\x05\x1F\u013B\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0140\n\x1F\x03 " +
    "\x03 \x03 \x03!\x03!\x03\"\x05\"\u0148\n\"\x03\"\x03\"\x03#\x03#\x03$" +
    "\x03$\x03%\x03%\x03%\x05%\u0153\n%\x03&\x03&\x05&\u0157\n&\x03&\x03&\x03" +
    "&\x05&\u015C\n&\x03&\x03&\x05&\u0160\n&\x03\'\x03\'\x03\'\x03(\x03(\x03" +
    ")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0170\n)\x03*\x03*\x03" +
    "*\x03*\x03*\x03*\x03*\x03*\x05*\u017A\n*\x03+\x03+\x03,\x03,\x05,\u0180" +
    "\n,\x03,\x03,\x03,\x05,\u0185\n,\x03,\x05,\u0188\n,\x03-\x06-\u018B\n" +
    "-\r-\x0E-\u018C\x03.\x03.\x05.\u0191\n.\x03/\x03/\x03/\x03/\x05/\u0197" +
    "\n/\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x030\x050\u01A4" +
    "\n0\x031\x031\x032\x032\x062\u01AA\n2\r2\x0E2\u01AB\x032\x032\x032\x03" +
    "2\x032\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x033\x03" +
    "3\x053\u01C0\n3\x034\x034\x034\x034\x074\u01C6\n4\f4\x0E4\u01C9\v4\x03" +
    "4\x034\x035\x035\x055\u01CF\n5\x035\x035\x035\x035\x055\u01D5\n5\x035" +
    "\x035\x055\u01D9\n5\x055\u01DB\n5\x036\x066\u01DE\n6\r6\x0E6\u01DF\x03" +
    "7\x067\u01E3\n7\r7\x0E7\u01E4\x038\x038\x039\x039\x03:\x03:\x03;\x03;" +
    "\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03A\x03A\x03B\x03" +
    "B\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0205\nD\x03E\x03E\x03" +
    "F\x03F\x03F\x03G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03" +
    "L\x03M\x03M\x03N\x03N\x02\x02\x02O\x03\x02\x03\x05\x02\x02\x07\x02\x02" +
    "\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15" +
    "\x02\x02\x17\x02\x02\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!" +
    "\x02\x02#\x02\x02%\x02\x02\'\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x02" +
    "1\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x04=\x02\x02?\x02\x02" +
    "A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02O\x02\x02" +
    "Q\x02\x05S\x02\x06U\x02\x02W\x02\x07Y\x02\x02[\x02\x02]\x02\x02_\x02\x02" +
    "a\x02\x02c\x02\x02e\x02\bg\x02\ti\x02\nk\x02\vm\x02\fo\x02\rq\x02\x0E" +
    "s\x02\x0Fu\x02\x10w\x02\x11y\x02\x12{\x02\x13}\x02\x14\x7F\x02\x15\x81" +
    "\x02\x16\x83\x02\x17\x85\x02\x18\x87\x02\x19\x89\x02\x1A\x8B\x02\x1B\x8D" +
    "\x02\x1C\x8F\x02\x1D\x91\x02\x1E\x93\x02\x1F\x95\x02 \x97\x02!\x99\x02" +
    "\x02\x9B\x02\x02\x03\x02\x15\x04\x02NNnn\x03\x023;\x04\x02ZZzz\x05\x02" +
    "2;CHch\x03\x0229\x04\x02DDdd\x03\x0223\x04\x02GGgg\x04\x02--//\x06\x02" +
    "FFHHffhh\x04\x02RRrr\x06\x02\f\f\x0F\x0F))^^\x06\x02\f\f\x0F\x0F$$^^\n" +
    "\x02$$))^^ddhhppttvv\x03\x0225\x04\x02\v\v\"\"\n\x02\v\f\x0F\x0F\"$(<" +
    "?B]]__}\x7F\x04\x02C\\c|\x03\x022;\u022F\x02\x03\x03\x02\x02\x02\x02;" +
    "\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02W\x03\x02" +
    "\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02" +
    "\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03" +
    "\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02" +
    "\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02" +
    "\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02" +
    "\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02" +
    "\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02" +
    "\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02" +
    "\x97\x03\x02\x02\x02\x03\xA1\x03\x02\x02\x02\x05\xA3\x03\x02\x02\x02\x07" +
    "\xA7\x03\x02\x02\x02\t\xAB\x03\x02\x02\x02\v\xAF\x03\x02\x02\x02\r\xB3" +
    "\x03\x02\x02\x02\x0F\xBF\x03\x02\x02\x02\x11\xC1\x03\x02\x02\x02\x13\xCA" +
    "\x03\x02\x02\x02\x15\xCC\x03\x02\x02\x02\x17\xCF\x03\x02\x02\x02\x19\xD5" +
    "\x03\x02\x02\x02\x1B\xD8\x03\x02\x02\x02\x1D\xDC\x03\x02\x02\x02\x1F\xE0" +
    "\x03\x02\x02\x02!\xE7\x03\x02\x02\x02#\xEA\x03\x02\x02\x02%\xF0\x03\x02" +
    "\x02\x02\'\xF2\x03\x02\x02\x02)\xF8\x03\x02\x02\x02+\xFF\x03\x02\x02\x02" +
    "-\u0102\x03\x02\x02\x02/\u0108\x03\x02\x02\x021\u010A\x03\x02\x02\x02" +
    "3\u010E\x03\x02\x02\x025\u0115\x03\x02\x02\x027\u0118\x03\x02\x02\x02" +
    "9\u011E\x03\x02\x02\x02;\u0122\x03\x02\x02\x02=\u013F\x03\x02\x02\x02" +
    "?\u0141\x03\x02\x02\x02A\u0144\x03\x02\x02\x02C\u0147\x03\x02\x02\x02" +
    "E\u014B\x03\x02\x02\x02G\u014D\x03\x02\x02\x02I\u014F\x03\x02\x02\x02" +
    "K\u015F\x03\x02\x02\x02M\u0161\x03\x02\x02\x02O\u0164\x03\x02\x02\x02" +
    "Q\u016F\x03\x02\x02\x02S\u0179\x03\x02\x02\x02U\u017B\x03\x02\x02\x02" +
    "W\u0187\x03\x02\x02\x02Y\u018A\x03\x02\x02\x02[\u0190\x03\x02\x02\x02" +
    "]\u0196\x03\x02\x02\x02_\u01A3\x03\x02\x02\x02a\u01A5\x03\x02\x02\x02" +
    "c\u01A7\x03\x02\x02\x02e\u01BF\x03\x02\x02\x02g\u01C1\x03\x02\x02\x02" +
    "i\u01DA\x03\x02\x02\x02k\u01DD\x03\x02\x02\x02m\u01E2\x03\x02\x02\x02" +
    "o\u01E6\x03\x02\x02\x02q\u01E8\x03\x02\x02\x02s\u01EA\x03\x02\x02\x02" +
    "u\u01EC\x03\x02\x02\x02w\u01EE\x03\x02\x02\x02y\u01F0\x03\x02\x02\x02" +
    "{\u01F2\x03\x02\x02\x02}\u01F4\x03\x02\x02\x02\x7F\u01F6\x03\x02\x02\x02" +
    "\x81\u01F8\x03\x02\x02\x02\x83\u01FA\x03\x02\x02\x02\x85\u01FC\x03\x02" +
    "\x02\x02\x87\u0204\x03\x02\x02\x02\x89\u0206\x03\x02\x02\x02\x8B\u0208" +
    "\x03\x02\x02\x02\x8D\u020B\x03\x02\x02\x02\x8F\u020D\x03\x02\x02\x02\x91" +
    "\u020F\x03\x02\x02\x02\x93\u0211\x03\x02\x02\x02\x95\u0213\x03\x02\x02" +
    "\x02\x97\u0215\x03\x02\x02\x02\x99\u0217\x03\x02\x02\x02\x9B\u0219\x03" +
    "\x02\x02\x02\x9D\xA2\x05\x05\x03\x02\x9E\xA2\x05\x07\x04\x02\x9F\xA2\x05" +
    "\t\x05\x02\xA0\xA2\x05\v\x06\x02\xA1\x9D\x03\x02\x02\x02\xA1\x9E\x03\x02" +
    "\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA0\x03\x02\x02\x02\xA2\x04\x03\x02" +
    "\x02\x02\xA3\xA5\x05\x0F\b\x02\xA4\xA6\x05\r\x07\x02\xA5\xA4\x03\x02\x02" +
    "\x02\xA5\xA6\x03\x02\x02\x02\xA6\x06\x03\x02\x02\x02\xA7\xA9\x05\x1D\x0F" +
    "\x02\xA8\xAA\x05\r\x07\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02" +
    "\x02\xAA\b\x03\x02\x02\x02\xAB\xAD\x05\'\x14\x02\xAC\xAE\x05\r\x07\x02" +
    "\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\n\x03\x02\x02\x02" +
    "\xAF\xB1\x051\x19\x02\xB0\xB2\x05\r\x07\x02\xB1\xB0\x03\x02\x02\x02\xB1" +
    "\xB2\x03\x02\x02\x02\xB2\f\x03\x02\x02\x02\xB3\xB4\t\x02\x02\x02\xB4\x0E" +
    "\x03\x02\x02\x02\xB5\xC0\x072\x02\x02\xB6\xBD\x05\x15\v\x02\xB7\xB9\x05" +
    "\x11\t\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBE\x03" +
    "\x02\x02\x02\xBA\xBB\x05\x1B\x0E\x02\xBB\xBC\x05\x11\t\x02\xBC\xBE\x03" +
    "\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBD\xBA\x03\x02\x02\x02\xBE\xC0\x03" +
    "\x02\x02\x02\xBF\xB5\x03\x02\x02\x02\xBF\xB6\x03\x02\x02\x02\xC0\x10\x03" +
    "\x02\x02\x02\xC1\xC6\x05\x13\n\x02\xC2\xC4\x05\x17\f\x02\xC3\xC2\x03\x02" +
    "\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7\x05\x13" +
    "\n\x02\xC6\xC3\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\x12\x03\x02" +
    "\x02\x02\xC8\xCB\x072\x02\x02\xC9\xCB\x05\x15\v\x02\xCA\xC8\x03\x02\x02" +
    "\x02\xCA\xC9\x03\x02\x02\x02\xCB\x14\x03\x02\x02\x02\xCC\xCD\t\x03\x02" +
    "\x02\xCD\x16\x03\x02\x02\x02\xCE\xD0\x05\x19\r\x02\xCF\xCE\x03\x02\x02" +
    "\x02\xD0\xD1\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02" +
    "\x02\xD2\x18\x03\x02\x02\x02\xD3\xD6\x05\x13\n\x02\xD4\xD6\x07a\x02\x02" +
    "\xD5\xD3\x03\x02\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\x1A\x03\x02\x02\x02" +
    "\xD7\xD9\x07a\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02" +
    "\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\x1C\x03\x02\x02\x02" +
    "\xDC\xDD\x072\x02\x02\xDD\xDE\t\x04\x02\x02\xDE\xDF\x05\x1F\x10\x02\xDF" +
    "\x1E\x03\x02\x02\x02\xE0\xE5\x05!\x11\x02\xE1\xE3\x05#\x12\x02\xE2\xE1" +
    "\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6" +
    "\x05!\x11\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6 \x03" +
    "\x02\x02\x02\xE7\xE8\t\x05\x02\x02\xE8\"\x03\x02\x02\x02\xE9\xEB\x05%" +
    "\x13\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02" +
    "\x02\x02\xEC\xED\x03\x02\x02\x02\xED$\x03\x02\x02\x02\xEE\xF1\x05!\x11" +
    "\x02\xEF\xF1\x07a\x02\x02\xF0\xEE\x03\x02\x02\x02\xF0\xEF\x03\x02\x02" +
    "\x02\xF1&\x03\x02\x02\x02\xF2\xF4\x072\x02\x02\xF3\xF5\x05\x1B\x0E\x02" +
    "\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02" +
    "\xF6\xF7\x05)\x15\x02\xF7(\x03\x02\x02\x02\xF8\xFD\x05+\x16\x02\xF9\xFB" +
    "\x05-\x17\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC" +
    "\x03\x02\x02\x02\xFC\xFE\x05+\x16\x02\xFD\xFA\x03\x02\x02\x02\xFD\xFE" +
    "\x03\x02\x02\x02\xFE*\x03\x02\x02\x02\xFF\u0100\t\x06\x02\x02\u0100,\x03" +
    "\x02\x02\x02\u0101\u0103\x05/\x18\x02\u0102\u0101\x03\x02\x02\x02\u0103" +
    "\u0104\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02" +
    "\x02\x02\u0105.\x03\x02\x02\x02\u0106\u0109\x05+\x16\x02\u0107\u0109\x07" +
    "a\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0107\x03\x02\x02\x02\u0109" +
    "0\x03\x02\x02\x02\u010A\u010B\x072\x02\x02\u010B\u010C\t\x07\x02\x02\u010C" +
    "\u010D\x053\x1A\x02\u010D2\x03\x02\x02\x02\u010E\u0113\x055\x1B\x02\u010F" +
    "\u0111\x057\x1C\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111\x03\x02\x02" +
    "\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x055\x1B\x02\u0113\u0110" +
    "\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u01144\x03\x02\x02\x02\u0115" +
    "\u0116\t\b\x02\x02\u01166\x03\x02\x02\x02\u0117\u0119\x059\x1D\x02\u0118" +
    "\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u0118\x03\x02" +
    "\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B8\x03\x02\x02\x02\u011C\u011F" +
    "\x055\x1B\x02\u011D\u011F\x07a\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E" +
    "\u011D\x03\x02\x02\x02\u011F:\x03\x02\x02\x02\u0120\u0123\x05=\x1F\x02" +
    "\u0121\u0123\x05I%\x02\u0122\u0120\x03\x02\x02\x02\u0122\u0121\x03\x02" +
    "\x02\x02\u0123<\x03\x02\x02\x02\u0124\u0125\x05\x11\t\x02\u0125\u0127" +
    "\x070\x02\x02\u0126\u0128\x05\x11\t\x02\u0127\u0126\x03\x02\x02\x02\u0127" +
    "\u0128\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u012B\x05? \x02" +
    "\u012A\u0129\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012D\x03" +
    "\x02\x02\x02\u012C\u012E\x05G$\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E" +
    "\x03\x02\x02\x02\u012E\u0140\x03\x02\x02\x02\u012F\u0130\x070\x02\x02" +
    "\u0130\u0132\x05\x11\t\x02\u0131\u0133\x05? \x02\u0132\u0131\x03\x02\x02" +
    "\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0136" +
    "\x05G$\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136" +
    "\u0140\x03\x02\x02\x02\u0137\u0138\x05\x11\t\x02\u0138\u013A\x05? \x02" +
    "\u0139\u013B\x05G$\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03\x02" +
    "\x02\x02\u013B\u0140\x03\x02\x02\x02\u013C\u013D\x05\x11\t\x02\u013D\u013E" +
    "\x05G$\x02\u013E\u0140\x03\x02\x02\x02\u013F\u0124\x03\x02\x02\x02\u013F" +
    "\u012F\x03\x02\x02\x02\u013F\u0137\x03\x02\x02\x02\u013F\u013C\x03\x02" +
    "\x02\x02\u0140>\x03\x02\x02\x02\u0141\u0142\x05A!\x02\u0142\u0143\x05" +
    "C\"\x02\u0143@\x03\x02\x02\x02\u0144\u0145\t\t\x02\x02\u0145B\x03\x02" +
    "\x02\x02\u0146\u0148\x05E#\x02\u0147\u0146\x03\x02\x02\x02\u0147\u0148" +
    "\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u014A\x05\x11\t\x02" +
    "\u014AD\x03\x02\x02\x02\u014B\u014C\t\n\x02\x02\u014CF\x03\x02\x02\x02" +
    "\u014D\u014E\t\v\x02\x02\u014EH\x03\x02\x02\x02\u014F\u0150\x05K&\x02" +
    "\u0150\u0152\x05M\'\x02\u0151\u0153\x05G$\x02\u0152\u0151\x03\x02\x02" +
    "\x02\u0152\u0153\x03\x02\x02\x02\u0153J\x03\x02\x02\x02\u0154\u0156\x05" +
    "\x1D\x0F\x02\u0155\u0157\x070\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156" +
    "\u0157\x03\x02\x02\x02\u0157\u0160\x03\x02\x02\x02\u0158\u0159\x072\x02" +
    "\x02\u0159\u015B\t\x04\x02\x02\u015A\u015C\x05\x1F\x10\x02\u015B\u015A" +
    "\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
    "\u015D\u015E\x070\x02\x02\u015E\u0160\x05\x1F\x10\x02\u015F\u0154\x03" +
    "\x02\x02\x02\u015F\u0158\x03\x02\x02\x02\u0160L\x03\x02\x02\x02\u0161" +
    "\u0162\x05O(\x02\u0162\u0163\x05C\"\x02\u0163N\x03\x02\x02\x02\u0164\u0165" +
    "\t\f\x02\x02\u0165P\x03\x02\x02\x02\u0166\u0167\x07v\x02\x02\u0167\u0168" +
    "\x07t\x02\x02\u0168\u0169\x07w\x02\x02\u0169\u0170\x07g\x02\x02\u016A" +
    "\u016B\x07h\x02\x02\u016B\u016C\x07c\x02\x02\u016C\u016D\x07n\x02\x02" +
    "\u016D\u016E\x07u\x02\x02\u016E\u0170\x07g\x02\x02\u016F\u0166\x03\x02" +
    "\x02\x02\u016F\u016A\x03\x02\x02\x02\u0170R\x03\x02\x02\x02\u0171\u0172" +
    "\x07)\x02\x02\u0172\u0173\x05U+\x02\u0173\u0174\x07)\x02\x02\u0174\u017A" +
    "\x03\x02\x02\x02\u0175\u0176\x07)\x02\x02\u0176\u0177\x05]/\x02\u0177" +
    "\u0178\x07)\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u0171\x03\x02\x02" +
    "\x02\u0179\u0175\x03\x02\x02\x02\u017AT\x03\x02\x02\x02\u017B\u017C\n" +
    "\r\x02\x02\u017CV\x03\x02\x02\x02\u017D\u017F\x07$\x02\x02\u017E\u0180" +
    "\x05Y-\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180" +
    "\u0181\x03\x02\x02\x02\u0181\u0188\x07$\x02\x02\u0182\u0184\x07)\x02\x02" +
    "\u0183\u0185\x05Y-\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02" +
    "\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0188\x07)\x02\x02\u0187\u017D" +
    "\x03\x02\x02\x02\u0187\u0182\x03\x02\x02\x02\u0188X\x03\x02\x02\x02\u0189" +
    "\u018B\x05[.\x02\u018A\u0189\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02" +
    "\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018DZ\x03\x02" +
    "\x02\x02\u018E\u0191\n\x0E\x02\x02\u018F\u0191\x05]/\x02\u0190\u018E\x03" +
    "\x02\x02\x02\u0190\u018F\x03\x02\x02\x02\u0191\\\x03\x02\x02\x02\u0192" +
    "\u0193\x07^\x02\x02\u0193\u0197\t\x0F\x02\x02\u0194\u0197\x05_0\x02\u0195" +
    "\u0197\x05c2\x02\u0196\u0192\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02" +
    "\u0196\u0195\x03\x02\x02\x02\u0197^\x03\x02\x02\x02\u0198\u0199\x07^\x02" +
    "\x02\u0199\u01A4\x05+\x16\x02\u019A\u019B\x07^\x02\x02\u019B\u019C\x05" +
    "+\x16\x02\u019C\u019D\x05+\x16\x02\u019D\u01A4\x03\x02\x02\x02\u019E\u019F" +
    "\x07^\x02\x02\u019F\u01A0\x05a1\x02\u01A0\u01A1\x05+\x16\x02\u01A1\u01A2" +
    "\x05+\x16\x02\u01A2\u01A4\x03\x02\x02\x02\u01A3\u0198\x03\x02\x02\x02" +
    "\u01A3\u019A\x03\x02\x02\x02\u01A3\u019E\x03\x02\x02\x02\u01A4`\x03\x02" +
    "\x02\x02\u01A5\u01A6\t\x10\x02\x02\u01A6b\x03\x02\x02\x02\u01A7\u01A9" +
    "\x07^\x02\x02\u01A8\u01AA\x07w\x02\x02\u01A9\u01A8\x03\x02\x02\x02\u01AA" +
    "\u01AB\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
    "\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\x05!\x11\x02\u01AE\u01AF" +
    "\x05!\x11\x02\u01AF\u01B0\x05!\x11\x02\u01B0\u01B1\x05!\x11\x02\u01B1" +
    "d\x03\x02\x02\x02\u01B2\u01B3\x07p\x02\x02\u01B3\u01B4\x07w\x02\x02\u01B4" +
    "\u01B5\x07n\x02\x02\u01B5\u01C0\x07n\x02\x02\u01B6\u01B7\x07w\x02\x02" +
    "\u01B7\u01B8\x07p\x02\x02\u01B8\u01B9\x07f\x02\x02\u01B9\u01BA\x07g\x02" +
    "\x02\u01BA\u01BB\x07h\x02\x02\u01BB\u01BC\x07k\x02\x02\u01BC\u01BD\x07" +
    "p\x02\x02\u01BD\u01BE\x07g\x02\x02\u01BE\u01C0\x07f\x02\x02\u01BF\u01B2" +
    "\x03\x02\x02\x02\u01BF\u01B6\x03\x02\x02\x02\u01C0f\x03\x02\x02\x02\u01C1" +
    "\u01C2\b4\x02\x02\u01C2\u01C7\x05\x99M\x02\u01C3\u01C6\x05\x99M\x02\u01C4" +
    "\u01C6\x05\x9BN\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C4\x03\x02\x02" +
    "\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7\u01C5\x03\x02\x02\x02\u01C7\u01C8" +
    "\x03\x02\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02" +
    "\u01CA\u01CB\b4\x03\x02\u01CBh\x03\x02\x02\x02\u01CC\u01CE\x07\f\x02\x02" +
    "\u01CD\u01CF\x05k6\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
    "\x02\x02\u01CF\u01DB\x03\x02\x02\x02\u01D0\u01D1\x07\x0F\x02\x02\u01D1" +
    "\u01D2\x07\f\x02\x02\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01D5\x05k6\x02" +
    "\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01DB\x03" +
    "\x02\x02\x02\u01D6\u01D8\x07\x0F\x02\x02\u01D7\u01D9\x05k6\x02\u01D8\u01D7" +
    "\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DB\x03\x02\x02\x02" +
    "\u01DA\u01CC\x03\x02\x02\x02\u01DA\u01D0\x03\x02\x02\x02\u01DA\u01D6\x03" +
    "\x02\x02\x02\u01DBj\x03\x02\x02\x02\u01DC\u01DE\t\x11\x02\x02\u01DD\u01DC" +
    "\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02" +
    "\u01DF\u01E0\x03\x02\x02\x02\u01E0l\x03\x02\x02\x02\u01E1\u01E3\n\x12" +
    "\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4" +
    "\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5n\x03\x02\x02" +
    "\x02\u01E6\u01E7\x07B\x02\x02\u01E7p\x03\x02\x02\x02\u01E8\u01E9\x07-" +
    "\x02\x02\u01E9r\x03\x02\x02\x02\u01EA\u01EB\x07/\x02\x02\u01EBt\x03\x02" +
    "\x02\x02\u01EC\u01ED\x07,\x02\x02\u01EDv\x03\x02\x02\x02\u01EE\u01EF\x07" +
    "1\x02\x02\u01EFx\x03\x02\x02\x02\u01F0\u01F1\x07<\x02\x02\u01F1z\x03\x02" +
    "\x02\x02\u01F2\u01F3\x070\x02\x02\u01F3|\x03\x02\x02\x02\u01F4\u01F5\x07" +
    ".\x02\x02\u01F5~\x03\x02\x02\x02\u01F6\u01F7\x07?\x02\x02\u01F7\x80\x03" +
    "\x02\x02\x02\u01F8\u01F9\x07A\x02\x02\u01F9\x82\x03\x02\x02\x02\u01FA" +
    "\u01FB\x07(\x02\x02\u01FB\x84\x03\x02\x02\x02\u01FC\u01FD\x07~\x02\x02" +
    "\u01FD\x86\x03\x02\x02\x02\u01FE\u01FF\x05\x7F@\x02\u01FF\u0200\x07@\x02" +
    "\x02\u0200\u0205\x03\x02\x02\x02\u0201\u0202\x05s:\x02\u0202\u0203\x07" +
    "@\x02\x02\u0203\u0205\x03\x02\x02\x02\u0204\u01FE\x03\x02\x02\x02\u0204" +
    "\u0201\x03\x02\x02\x02\u0205\x88\x03\x02\x02\x02\u0206\u0207\x07#\x02" +
    "\x02\u0207\x8A\x03\x02\x02\x02\u0208\u0209\x07}\x02\x02\u0209\u020A\x07" +
    "B\x02\x02\u020A\x8C\x03\x02\x02\x02\u020B\u020C\x07}\x02\x02\u020C\x8E" +
    "\x03\x02\x02\x02\u020D\u020E\x07\x7F\x02\x02\u020E\x90\x03\x02\x02\x02" +
    "\u020F\u0210\x07*\x02\x02\u0210\x92\x03\x02\x02\x02\u0211\u0212\x07+\x02" +
    "\x02\u0212\x94\x03\x02\x02\x02\u0213\u0214\x07]\x02\x02\u0214\x96\x03" +
    "\x02\x02\x02\u0215\u0216\x07_\x02\x02\u0216\x98\x03\x02\x02\x02\u0217" +
    "\u0218\t\x13\x02\x02\u0218\x9A\x03\x02\x02\x02\u0219\u021A\t\x14\x02\x02" +
    "\u021A\x9C\x03\x02\x02\x02?\x02\xA1\xA5\xA9\xAD\xB1\xB8\xBD\xBF\xC3\xC6" +
    "\xCA\xD1\xD5\xDA\xE2\xE5\xEC\xF0\xF4\xFA\xFD\u0104\u0108\u0110\u0113\u011A" +
    "\u011E\u0122\u0127\u012A\u012D\u0132\u0135\u013A\u013F\u0147\u0152\u0156" +
    "\u015B\u015F\u016F\u0179\u017F\u0184\u0187\u018C\u0190\u0196\u01A3\u01AB" +
    "\u01BF\u01C5\u01C7\u01CE\u01D4\u01D8\u01DA\u01DF\u01E4\u0204\x04\x034" +
    "\x02\x034\x03";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], TomLexer.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], TomLexer.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], TomLexer.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], TomLexer.prototype, "serializedATN", null);
__decorate([
    Decorators_2.Override
], TomLexer.prototype, "modeNames", null);
__decorate([
    Decorators_2.Override
], TomLexer.prototype, "action", null);
exports.TomLexer = TomLexer;
//# sourceMappingURL=TomLexer.js.map