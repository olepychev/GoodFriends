<script>
	import Accordion from '../../lib/components/accordion/accordion.svelte';
</script>

<main class="w-fw-full md:py-[27px] md:pl-[30px] md:pr-[30px]" id="main">
	<div class="container-main">
		<div class="relative w-full mb-[35px] md:flex hidden">
            <img
                class=" w-full min-h-[360px] max-h-[360px] object-cover md:rounded-[14px]"
                src="/imgs/affiliate.svg"
                alt=""
            />
            <div class="absolute left-[47px] top-[50%] translate-y-[-50%]">
                <div class="flex flex-col w-full max-w-[293px]">
                    <p class="text-xs text-purpleLight font-medium uppercase">LEARN MORE ABOUT</p>
                    <h4 class="text-3xl text-white font-semibold">AFFILIATE PROGRAM</h4>
                    <p class="text-xs text-purpleLight font-medium uppercase">
                        We have special conditions for you to customize your referral program!                    </p>
                    <button
                        class="px-[26px] py-[16px] font-semibold font-italic text-msm bg-white9 text-white mt-[18px] border border-white9 rounded-[9px] opacity-80 hover:opacity-100 transition-all max-w-max"
                        >Contact us</button
                    >
                </div>
            </div>
        </div>

		<div class="px-[15px] py-[30px] sm:px-[30px] md:px-[0px] md:py-[0px]">
            <h6 class="font-semibold text-xl gradient-text-white2 main mb-[15px]">
                Frequently Asked Questions
            </h6>
            <div class="flex flex-col gap-[15px]">
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
                <Accordion question="How much can i earn from my referal?" answer="Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim Lorem ipsum dolor sit amet consectetur. Quis rhoncus cursus magna nunc nam aliquet pretium varius et. Pellentesque vel ipsum purus lectus at enim"/>
            </div>
        </div>
    </div>
</main>
