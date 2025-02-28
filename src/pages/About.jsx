import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <h1 className="font-bold text-5xl text-[#2c2c2c] mt-10 animate-fade-in-up text-center">
        เกี่ยวกับ Rolex
      </h1>
      <hr className="border-2 border-[#2c2c2c] mb-10 mt-4 w-1/4 mx-auto" />

      <div className="mt-10 flex flex-col md:flex-row px-6 md:px-12">
        <div className="md:w-2/3 mx-auto bg-[#f5f5f5] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
          <h1 className="font-semibold text-4xl text-[#3e3e3e] mb-8 animate-fade-in-up text-center">
            ประวัติความเป็นมาของ Rolex
          </h1>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2448–2462: ฮันส์ วิลสดอร์ฟ</strong>
            <br />
            ประวัติศาสตร์ของ Rolex มีความเชื่อมโยงอย่างแยกไม่ออกกับจิตวิญญาณแห่งวิสัยทัศน์ของ Hans Wilsdorf ผู้ก่อตั้ง ในปี 1905 เมื่ออายุ 24 ปี Hans Wilsdorf ได้ก่อตั้งบริษัทแห่งหนึ่งในลอนดอนซึ่งเชี่ยวชาญด้านการจัดจำหน่ายนาฬิกา เขาเริ่มฝันถึงนาฬิกาที่สวมอยู่บนข้อมือ นาฬิกาข้อมือไม่ได้แม่นยำมากนักในขณะนั้น แต่ Hans Wilsdorf เล็งเห็นล่วงหน้าว่านาฬิกาข้อมือไม่เพียงแต่จะดูหรูหราเท่านั้น แต่ยังเชื่อถือได้อีกด้วย
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2451: อัจฉริยะในห้าตัวอักษร</strong>
            <br />
            เขากล่าวว่า “ผมพยายามรวมตัวอักษรในทุกวิถีทางที่เป็นไปได้ นี่ทำให้ฉันมีชื่อนับร้อยชื่อ แต่ไม่มีชื่อใดที่รู้สึกว่าถูกต้องเลย เช้าวันหนึ่ง ขณะนั่งอยู่บนดาดฟ้าชั้นบนของรถโดยสารลากม้าเลียบชายฝั่งชีปไซด์ในลอนดอน มีจินนี่คนหนึ่งกระซิบคำว่า 'Rolex' ข้างหูของฉัน”
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2453: การแสวงหาความแม่นยำโครโนเมตริก</strong>
            <br />
            Rolex ให้ความสำคัญกับคุณภาพของกลไกเป็นอันดับแรก การแสวงหาความเที่ยงตรงของโครโนเมตริกอย่างไม่หยุดยั้งนำไปสู่ความสำเร็จอย่างรวดเร็ว ในปี 1910 นาฬิกา Rolex เป็นนาฬิกาข้อมือเรือนแรกในโลกที่ได้รับใบรับรอง Swiss Certificate of Chronometric Precision ซึ่งมอบให้โดยศูนย์จัดอันดับนาฬิกาอย่างเป็นทางการใน Bienne
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2457: การประดิษฐ์หอยนางรม</strong>
            <br />
            สี่ปีต่อมา ในปี 1914 หอดูดาว Kew ในบริเตนใหญ่ได้มอบใบรับรองความเที่ยงตรงระดับ "A" ให้กับนาฬิกาข้อมือ Rolex ซึ่งเป็นความโดดเด่นที่สงวนไว้สำหรับโครโนมิเตอร์ทางทะเลจนถึงเวลานั้นเท่านั้น นับจากวันนั้นเป็นต้นมา นาฬิกาข้อมือ Rolex ก็มีความหมายเหมือนกันในเรื่องความแม่นยำ
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2462: เจนีวา</strong>
            <br />
            Rolex ย้ายไปที่เจนีวา เมืองที่มีชื่อเสียงระดับนานาชาติในด้านการผลิตนาฬิกา Montres Rolex S.A. จดทะเบียนที่เจนีวาในปี 1920
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2469–2488: เหตุการณ์สำคัญในการผลิตนาฬิกา</strong>
            <br />
            <strong className="font-semibold text-[#2d2d2d]">นาฬิกาข้อมือกันน้ำเรือนแรก (พ.ศ. 2469)</strong>
            <br />
            ในปี 1926 Rolex สร้างสรรค์นาฬิกาข้อมือกันน้ำและกันฝุ่นเรือนแรกได้ถือเป็นก้าวสำคัญ ด้วยชื่อ “Oyster” นาฬิกาเรือนนี้โดดเด่นด้วยตัวเรือนที่ปิดผนึกอย่างแน่นหนา ซึ่งให้การปกป้องสูงสุดสำหรับกลไก
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2470: ความท้าทายข้ามช่องทาง</strong>
            <br />
            การอ้างว่านาฬิกากันน้ำได้เป็นสิ่งหนึ่งที่ มันค่อนข้างเป็นอีกเรื่องหนึ่งที่จะพิสูจน์มัน ในปี 1927 Rolex Oyster ลำหนึ่งได้ข้ามช่องแคบอังกฤษ ซึ่งสวมใส่โดยนักว่ายน้ำชาวอังกฤษชื่อ Mercedes Gleitze การว่ายน้ำกินเวลานานกว่า 10 ชั่วโมง และนาฬิกายังคงอยู่ในสภาพการทำงานที่สมบูรณ์เมื่อสิ้นสุดการว่ายน้ำ
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2474: การเคลื่อนไหวอย่างต่อเนื่อง</strong>
            <br />
            ในปี 1931 Rolex คิดค้นและจดสิทธิบัตรกลไกไขลานอัตโนมัติตัวแรกของโลกที่มีโรเตอร์ Perpetual ระบบอันชาญฉลาดซึ่งเป็นผลงานศิลปะที่แท้จริง ถือเป็นหัวใจสำคัญของนาฬิกาอัตโนมัติสมัยใหม่ทุกเรือนในปัจจุบัน
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2478: เซอร์มัลคอล์ม แคมป์เบลล์</strong>
            <br />
            ในช่วงทศวรรษที่ 1930 Rolex และหนึ่งในนักแข่งที่เร็วที่สุดในโลกอย่าง Sir Malcolm Campbell ได้รวมตัวกันเพื่อแสวงหาความเร็ว เมื่อวันที่ 4 กันยายน พ.ศ. 2478 ที่พวงมาลัยของ Bluebird และสวมนาฬิกา Rolex “ราชาแห่งความเร็ว” นี้ได้สร้างสถิติความเร็วภาคพื้นดินมากกว่า 300 ไมล์ต่อชั่วโมง (ประมาณ 485 กม./ชม.) ที่ Bonneville Salt Flats ในรัฐยูทาห์
          </p>

          <p className="text-lg text-[#555] leading-relaxed mb-6 animate-fade-in-up">
            <strong className="font-semibold text-[#2d2d2d]">พ.ศ. 2488: Datejust รุ่นแรก</strong>
            <br />
            ปี 1945 เป็นปีแห่งการกำเนิดของ Datejust ซึ่งเป็นนาฬิกาข้อมือโครโนมิเตอร์แบบไขลานอัตโนมัติเรือนแรกที่แสดงวันที่ในช่องบนหน้าปัด นาฬิกาที่มีความโดดเด่นอย่างมาก Datejust มาพร้อมกับสายนาฬิกา Jubilee ที่สร้างขึ้นเป็นพิเศษสำหรับนาฬิกาเรือนนี้ และขอบหน้าปัดแบบร่อง ทำให้สามารถจดจำได้ทันทีว่าเป็น Rolex
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
