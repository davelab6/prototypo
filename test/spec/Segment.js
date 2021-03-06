'use strict';

/* jshint camelcase: false */
describe('Segment', function() {

  // load the controller's module
  beforeEach(module('prototypo.Segment', 'prototypo.Point'));


  var _Segment,
    o,
    d,
    s0,
    s1,
    s_h,
    s_v,
    s_c,
    s_q,
    s_l,
    s_m,
    s_s,
    s_t,
    s_z,
    s_H,
    s_V,
    s_C,
    s_Q,
    s_L,
    s_M,
    s_S,
    s_T,
    s_Z,
    s_rq,
    s_rc,
    s_rs,
    s_rQ,
    s_rC,
    s_rS,
    s_l0,
    s_l1,
    s_l2,
    sa_h,
    sa_v,
    sa_c,
    sa_q,
    sa_l,
    sa_m,
    sa_s,
    sa_t,
    sa_z,
    sa_H,
    sa_V,
    sa_C,
    sa_Q,
    sa_L,
    sa_M,
    sa_S,
    sa_T,
    sa_Z,
    sa_rq,
    sa_rc,
    sa_rs,
    sa_rQ,
    sa_rC,
    sa_rS;

  beforeEach(inject(function( Segment, Point ) {
    _Segment = Segment;
    o = Point(0,0),
    d = Point(10,-10);

    s0 = new Segment('z', Point(o) );
    s1 = Segment('z', Point(o) );

    s_z = Segment( 'z', Point(o) );
    s_h = Segment( 'h -11.11', Point(o) );
    s_v = Segment( 'v -22.22', Point(o) );
    s_m = Segment( 'm -33.33 -44.44', Point(o) );
    s_l = Segment( 'l 55.55 66.66', Point(o) );
    s_q = Segment( 'q 77.77 88.88 99.99 11.11', Point(o) );
    s_c = Segment( 'c 11.11 22.22 33.33 44.44 55.55 66.66', Point(o) );
    s_t = Segment( 't 77.77 88.88', Point(o) );
    s_s = Segment( 's 99.99 11.11 22.22 33.33', Point(o) );
    s_Z = Segment( 'Z', Point(o) );
    s_H = Segment( 'H -11.11', Point(o) );
    s_V = Segment( 'V -22.22', Point(o) );
    s_M = Segment( 'M -33.33 -44.44', Point(o) );
    s_L = Segment( 'L 55.55 66.66', Point(o) );
    s_Q = Segment( 'Q 77.77 88.88 99.99 11.11', Point(o) );
    s_C = Segment( 'C 11.11 22.22 33.33 44.44 55.55 66.66', Point(o) );
    s_T = Segment( 'T 77.77 88.88', Point(o) );
    s_S = Segment( 'S 99.99 11.11 22.22 33.33', Point(o) );
    s_rq = Segment( 'rq 11.11 22.22 33.33 44.44', Point(o) );
    s_rc = Segment( 'rc 55.55 66.66 77.77 88.88 99.99 11.11', Point(o) );
    s_rs = Segment( 'rs 22.22 33.33 44.44 55.55', Point(o) );
    s_rQ = Segment( 'rQ 11.11 22.22 33.33 44.44', Point(o) );
    s_rC = Segment( 'rC 55.55 66.66 77.77 88.88 99.99 11.11', Point(o) );
    s_rS = Segment( 'rS 22.22 33.33 44.44 55.55', Point(o) );

    s_l0 = Segment( '  l  -11.11   22.22 ', Point(o) );
    s_l1 = Segment( '\t\tl\t \t-33.33 \t 44.44  \t', Point(o) );
    s_l2 = Segment( ',,l , -55.55, ,66.66  ,', Point(o) );

    sa_z = Segment( 'z', Point(d) );
    sa_h = Segment( 'h -11.11', Point(d) );
    sa_v = Segment( 'v -22.22', Point(d) );
    sa_m = Segment( 'm -33.33 -44.44', Point(d) );
    sa_l = Segment( 'l 55.55 66.66', Point(d) );
    sa_q = Segment( 'q 77.77 88.88 99.99 11.11', Point(d) );
    sa_c = Segment( 'c 11.11 22.22 33.33 44.44 55.55 66.66', Point(d) );
    sa_t = Segment( 't 77.77 88.88', Point(d) );
    sa_s = Segment( 's 99.99 11.11 22.22 33.33', Point(d) );
    sa_Z = Segment( 'Z', Point(d) );
    sa_H = Segment( 'H -11.11', Point(d) );
    sa_V = Segment( 'V -22.22', Point(d) );
    sa_M = Segment( 'M -33.33 -44.44', Point(d) );
    sa_L = Segment( 'L 55.55 66.66', Point(d) );
    sa_Q = Segment( 'Q 77.77 88.88 99.99 11.11', Point(d) );
    sa_C = Segment( 'C 11.11 22.22 33.33 44.44 55.55 66.66', Point(d) );
    sa_T = Segment( 'T 77.77 88.88', Point(d) );
    sa_S = Segment( 'S 99.99 11.11 22.22 33.33', Point(d) );
    sa_rq = Segment( 'rq 11.11 22.22 33.33 44.44', Point(d) );
    sa_rc = Segment( 'rc 55.55 66.66 77.77 88.88 99.99 11.11', Point(d) );
    sa_rs = Segment( 'rs 22.22 33.33 44.44 55.55', Point(d) );
    sa_rQ = Segment( 'rQ 11.11 22.22 33.33 44.44', Point(d) );
    sa_rC = Segment( 'rC 55.55 66.66 77.77 88.88 99.99 11.11', Point(d) );
    sa_rS = Segment( 'rS 22.22 33.33 44.44 55.55', Point(d) );
  }));

  it('can be called with or without new', function() {
    expect(s0 instanceof _Segment).toBe(true);
    expect(s1 instanceof _Segment).toBe(true);
  });

  it('parses all possible kind of processed segment', function() {
    // z
    expect(s_z.command).toBe('Z');
    expect(s_z.controls.length).toBe(0);
    expect(s_z.end).toBe(undefined);

    // h
    expect(s_h.command).toBe('H');
    expect(s_h.controls.length).toBe(0);
    expect(s_h.end.x).toBe(-11.11);
    expect(s_h.end.y).toBe(undefined);

    // v
    expect(s_v.command).toBe('V');
    expect(s_v.controls.length).toBe(0);
    expect(s_v.end.y).toBe(-22.22);
    expect(s_v.end.x).toBe(undefined);

    // m
    expect(s_m.command).toBe('M');
    expect(s_m.controls.length).toBe(0);
    expect(s_m.end.x).toBe(-33.33);
    expect(s_m.end.y).toBe(-44.44);

    // l
    expect(s_l.command).toBe('L');
    expect(s_l.controls.length).toBe(0);
    expect(s_l.end.x).toBe(55.55);
    expect(s_l.end.y).toBe(66.66);

    // q
    expect(s_q.command).toBe('Q');
    expect(s_q.end.x).toBe(99.99);
    expect(s_q.end.y).toBe(11.11);
    expect(s_q.controls.length).toBe(1);
    expect(s_q.controls[0].x).toBe(77.77);
    expect(s_q.controls[0].y).toBe(88.88);

    // c
    expect(s_c.command).toBe('C');
    expect(s_c.end.x).toBe(55.55);
    expect(s_c.end.y).toBe(66.66);
    expect(s_c.controls.length).toBe(2);
    expect(s_c.controls[0].x).toBe(11.11);
    expect(s_c.controls[0].y).toBe(22.22);
    expect(s_c.controls[1].x).toBe(33.33);
    expect(s_c.controls[1].y).toBe(44.44);

    // t
    expect(s_t.command).toBe('T');
    expect(s_t.controls.length).toBe(0);
    expect(s_t.end.x).toBe(77.77);
    expect(s_t.end.y).toBe(88.88);

    // s
    expect(s_s.command).toBe('S');
    expect(s_s.controls.length).toBe(1);
    expect(s_s.end.x).toBe(22.22);
    expect(s_s.end.y).toBe(33.33);
    expect(s_s.controls[0].x).toBe(99.99);
    expect(s_s.controls[0].y).toBe(11.11);

    // rq
    expect(s_rq.command).toBe('Q');
    expect(s_rq.end.x).toBe(33.33);
    expect(s_rq.end.y).toBe(44.44);
    expect(s_rq.controls.length).toBe(2);
    expect(s_rq.controls[0]).toBe(undefined);
    expect(s_rq.controls[1].x).toBe(11.11 + 33.33);
    expect(s_rq.controls[1].y).toBe(22.22 + 44.44);

    // rc
    expect(s_rc.command).toBe('C');
    expect(s_rc.end.x).toBe(99.99);
    expect(s_rc.end.y).toBe(11.11);
    expect(s_rc.controls.length).toBe(2);
    expect(s_rc.controls[0].x).toBe(55.55);
    expect(s_rc.controls[0].y).toBe(66.66);
    expect(s_rc.controls[1].x).toBe(77.77 + 99.99);
    expect(s_rc.controls[1].y).toBe(88.88 + 11.11);

    // rs
    expect(s_rs.command).toBe('S');
    expect(s_rs.controls.length).toBe(2);
    expect(s_rs.end.x).toBe(44.44);
    expect(s_rs.end.y).toBe(55.55);
    expect(s_rs.controls[0]).toBe(undefined);
    expect(s_rs.controls[1].x).toBe(22.22 + 44.44);
    expect(s_rs.controls[1].y).toBe(33.33 + 55.55);

    // Z
    expect(s_Z.command).toBe('Z');
    expect(s_Z.controls.length).toBe(0);
    expect(s_Z.end).toBe(undefined);

    // H
    expect(s_H.command).toBe('H');
    expect(s_H.controls.length).toBe(0);
    expect(s_H.end.x).toBe(-11.11);
    expect(s_H.end.y).toBe(undefined);

    // V
    expect(s_V.command).toBe('V');
    expect(s_V.controls.length).toBe(0);
    expect(s_V.end.y).toBe(-22.22);
    expect(s_V.end.x).toBe(undefined);

    // M
    expect(s_M.command).toBe('M');
    expect(s_M.controls.length).toBe(0);
    expect(s_M.end.x).toBe(-33.33);
    expect(s_M.end.y).toBe(-44.44);

    // L
    expect(s_L.command).toBe('L');
    expect(s_L.controls.length).toBe(0);
    expect(s_L.end.x).toBe(55.55);
    expect(s_L.end.y).toBe(66.66);

    // Q
    expect(s_Q.command).toBe('Q');
    expect(s_Q.end.x).toBe(99.99);
    expect(s_Q.end.y).toBe(11.11);
    expect(s_Q.controls.length).toBe(1);
    expect(s_Q.controls[0].x).toBe(77.77);
    expect(s_Q.controls[0].y).toBe(88.88);

    // C
    expect(s_C.command).toBe('C');
    expect(s_C.end.x).toBe(55.55);
    expect(s_C.end.y).toBe(66.66);
    expect(s_C.controls.length).toBe(2);
    expect(s_C.controls[0].x).toBe(11.11);
    expect(s_C.controls[0].y).toBe(22.22);
    expect(s_C.controls[1].x).toBe(33.33);
    expect(s_C.controls[1].y).toBe(44.44);

    // T
    expect(s_T.command).toBe('T');
    expect(s_T.controls.length).toBe(0);
    expect(s_T.end.x).toBe(77.77);
    expect(s_T.end.y).toBe(88.88);

    // S
    expect(s_S.command).toBe('S');
    expect(s_S.controls.length).toBe(1);
    expect(s_S.end.x).toBe(22.22);
    expect(s_S.end.y).toBe(33.33);
    expect(s_S.controls[0].x).toBe(99.99);
    expect(s_S.controls[0].y).toBe(11.11);

    // rQ
    expect(s_rQ.command).toBe('Q');
    expect(s_rQ.end.x).toBe(33.33);
    expect(s_rQ.end.y).toBe(44.44);
    expect(s_rQ.controls.length).toBe(2);
    expect(s_rQ.controls[0]).toBe(undefined);
    expect(s_rQ.controls[1].x).toBe(11.11 + 33.33);
    expect(s_rQ.controls[1].y).toBe(22.22 + 44.44);

    // rC
    expect(s_rC.command).toBe('C');
    expect(s_rC.end.x).toBe(99.99);
    expect(s_rC.end.y).toBe(11.11);
    expect(s_rC.controls.length).toBe(2);
    expect(s_rC.controls[0].x).toBe(55.55);
    expect(s_rC.controls[0].y).toBe(66.66);
    expect(s_rC.controls[1].x).toBe(77.77 + 99.99);
    expect(s_rC.controls[1].y).toBe(88.88 + 11.11);

    // rS
    expect(s_rS.command).toBe('S');
    expect(s_rS.controls.length).toBe(2);
    expect(s_rS.end.x).toBe(44.44);
    expect(s_rS.end.y).toBe(55.55);
    expect(s_rS.controls[0]).toBe(undefined);
    expect(s_rS.controls[1].x).toBe(22.22 + 44.44);
    expect(s_rS.controls[1].y).toBe(33.33 + 55.55);
  });

  it('ignores spaces, tabs and commas completly', function() {
    expect(s_l0.command).toBe('L');
    expect(s_l0.controls.length).toBe(0);
    expect(s_l0.end.x).toBe(-11.11);
    expect(s_l0.end.y).toBe(22.22);

    expect(s_l1.command).toBe('L');
    expect(s_l1.controls.length).toBe(0);
    expect(s_l1.end.x).toBe(-33.33);
    expect(s_l1.end.y).toBe(44.44);

    expect(s_l2.command).toBe('L');
    expect(s_l2.controls.length).toBe(0);
    expect(s_l2.end.x).toBe(-55.55);
    expect(s_l2.end.y).toBe(66.66);
  });

  it('converts all coordinates to absolute', function() {
    // z
    expect(sa_z.command).toBe('Z');
    expect(sa_z.controls.length).toBe(0);
    expect(sa_z.end).toBe(undefined);

    // h
    expect(sa_h.command).toBe('H');
    expect(sa_h.controls.length).toBe(0);
    expect(sa_h.end.x).toBe(-11.11 + 10);
    expect(sa_h.end.y).toBe(undefined);

    // v
    expect(sa_v.command).toBe('V');
    expect(sa_v.controls.length).toBe(0);
    expect(sa_v.end.y).toBe(-22.22 - 10);
    expect(sa_v.end.x).toBe(undefined);

    // m
    expect(sa_m.command).toBe('M');
    expect(sa_m.controls.length).toBe(0);
    expect(sa_m.end.x).toBe(-33.33 + 10);
    expect(sa_m.end.y).toBe(-44.44 - 10);

    // l
    expect(sa_l.command).toBe('L');
    expect(sa_l.controls.length).toBe(0);
    expect(sa_l.end.x).toBe(55.55 + 10);
    expect(sa_l.end.y).toBe(66.66 - 10);

    // q
    expect(sa_q.command).toBe('Q');
    expect(sa_q.end.x).toBe(99.99 + 10);
    expect(sa_q.end.y).toBe(11.11 - 10);
    expect(sa_q.controls.length).toBe(1);
    expect(sa_q.controls[0].x).toBe(77.77 + 10);
    expect(sa_q.controls[0].y).toBe(88.88 - 10);

    // c
    expect(sa_c.command).toBe('C');
    expect(sa_c.end.x).toBe(55.55 + 10);
    expect(sa_c.end.y).toBe(66.66 - 10);
    expect(sa_c.controls.length).toBe(2);
    expect(sa_c.controls[0].x).toBe(11.11 + 10);
    expect(sa_c.controls[0].y).toBe(22.22 - 10);
    expect(sa_c.controls[1].x).toBe(33.33 + 10);
    expect(sa_c.controls[1].y).toBe(44.44 - 10);

    // t
    expect(sa_t.command).toBe('T');
    expect(sa_t.controls.length).toBe(0);
    expect(sa_t.end.x).toBe(77.77 + 10);
    expect(sa_t.end.y).toBe(88.88 - 10);

    // s
    expect(sa_s.command).toBe('S');
    expect(sa_s.controls.length).toBe(1);
    expect(sa_s.end.x).toBe(22.22 + 10);
    expect(sa_s.end.y).toBe(33.33 - 10);
    expect(sa_s.controls[0].x).toBe(99.99 + 10);
    expect(sa_s.controls[0].y).toBe(11.11 - 10);

    // rq
    expect(sa_rq.command).toBe('Q');
    expect(sa_rq.end.x).toBe(33.33 + 10);
    expect(sa_rq.end.y).toBe(44.44 - 10);
    expect(sa_rq.controls.length).toBe(2);
    expect(sa_rq.controls[0]).toBe(undefined);
    expect(sa_rq.controls[1].x).toBe(11.11 + 33.33 + 10);
    expect(sa_rq.controls[1].y).toBe(22.22 + 44.44 - 10);

    // rc
    expect(sa_rc.command).toBe('C');
    expect(sa_rc.end.x).toBe(99.99 + 10);
    expect(sa_rc.end.y).toBe(11.11 - 10);
    expect(sa_rc.controls.length).toBe(2);
    expect(sa_rc.controls[0].x).toBe(55.55 + 10);
    expect(sa_rc.controls[0].y).toBe(66.66 - 10);
    expect(sa_rc.controls[1].x).toBe(77.77 + 99.99 + 10);
    expect(sa_rc.controls[1].y).toBe(88.88 + 11.11 - 10);

    // rs
    expect(sa_rs.command).toBe('S');
    expect(sa_rs.controls.length).toBe(2);
    expect(sa_rs.end.x).toBe(44.44 + 10);
    expect(sa_rs.end.y).toBe(55.55 - 10);
    expect(sa_rs.controls[0]).toBe(undefined);
    expect(sa_rs.controls[1].x).toBe(22.22 + 44.44 + 10);
    expect(sa_rs.controls[1].y).toBe(33.33 + 55.55 - 10);

    // Z
    expect(s_Z.command).toBe('Z');
    expect(s_Z.controls.length).toBe(0);
    expect(s_Z.end).toBe(undefined);

    // H
    expect(s_H.command).toBe('H');
    expect(s_H.controls.length).toBe(0);
    expect(s_H.end.x).toBe(-11.11);
    expect(s_H.end.y).toBe(undefined);

    // V
    expect(s_V.command).toBe('V');
    expect(s_V.controls.length).toBe(0);
    expect(s_V.end.y).toBe(-22.22);
    expect(s_V.end.x).toBe(undefined);

    // M
    expect(s_M.command).toBe('M');
    expect(s_M.controls.length).toBe(0);
    expect(s_M.end.x).toBe(-33.33);
    expect(s_M.end.y).toBe(-44.44);

    // L
    expect(s_L.command).toBe('L');
    expect(s_L.controls.length).toBe(0);
    expect(s_L.end.x).toBe(55.55);
    expect(s_L.end.y).toBe(66.66);

    // Q
    expect(s_Q.command).toBe('Q');
    expect(s_Q.end.x).toBe(99.99);
    expect(s_Q.end.y).toBe(11.11);
    expect(s_Q.controls.length).toBe(1);
    expect(s_Q.controls[0].x).toBe(77.77);
    expect(s_Q.controls[0].y).toBe(88.88);

    // C
    expect(s_C.command).toBe('C');
    expect(s_C.end.x).toBe(55.55);
    expect(s_C.end.y).toBe(66.66);
    expect(s_C.controls.length).toBe(2);
    expect(s_C.controls[0].x).toBe(11.11);
    expect(s_C.controls[0].y).toBe(22.22);
    expect(s_C.controls[1].x).toBe(33.33);
    expect(s_C.controls[1].y).toBe(44.44);

    // T
    expect(s_T.command).toBe('T');
    expect(s_T.controls.length).toBe(0);
    expect(s_T.end.x).toBe(77.77);
    expect(s_T.end.y).toBe(88.88);

    // S
    expect(s_S.command).toBe('S');
    expect(s_S.controls.length).toBe(1);
    expect(s_S.end.x).toBe(22.22);
    expect(s_S.end.y).toBe(33.33);
    expect(s_S.controls[0].x).toBe(99.99);
    expect(s_S.controls[0].y).toBe(11.11);

    // rQ
    expect(s_rQ.command).toBe('Q');
    expect(s_rQ.end.x).toBe(33.33);
    expect(s_rQ.end.y).toBe(44.44);
    expect(s_rQ.controls.length).toBe(2);
    expect(s_rQ.controls[0]).toBe(undefined);
    expect(s_rQ.controls[1].x).toBe(11.11 + 33.33);
    expect(s_rQ.controls[1].y).toBe(22.22 + 44.44);

    // rC
    expect(s_rC.command).toBe('C');
    expect(s_rC.end.x).toBe(99.99);
    expect(s_rC.end.y).toBe(11.11);
    expect(s_rC.controls.length).toBe(2);
    expect(s_rC.controls[0].x).toBe(55.55);
    expect(s_rC.controls[0].y).toBe(66.66);
    expect(s_rC.controls[1].x).toBe(77.77 + 99.99);
    expect(s_rC.controls[1].y).toBe(88.88 + 11.11);

    // rS
    expect(s_rS.command).toBe('S');
    expect(s_rS.controls.length).toBe(2);
    expect(s_rS.end.x).toBe(44.44);
    expect(s_rS.end.y).toBe(55.55);
    expect(s_rS.controls[0]).toBe(undefined);
    expect(s_rS.controls[1].x).toBe(22.22 + 44.44);
    expect(s_rS.controls[1].y).toBe(33.33 + 55.55);
  });

});