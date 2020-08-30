package com.liurs.love;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author liuruisen
 * @version V1.0
 * @date 2019/8/5 10:23
 * @Package com.liurs.love
 */
@Controller
public class LoveController {

    /**
     * 首页
     *
     * @return
     */
    @RequestMapping("index1")
    public String index1() {
        return "index1";
    }

    /**
     * 首页
     *
     * @return
     */
    @RequestMapping("index2")
    public String index2() {
        return "index2";
    }

    /**
     * 首页
     *
     * @return
     */
    @RequestMapping("index3")
    public String index3() {
        return "index3";
    }
}
