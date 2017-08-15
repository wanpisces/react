import React, { Component } from 'react';
import { Link } from "react-router";

export default class ArticlesCategory extends Component {

    constructor(props) {
        super(props);
    }
    // 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有super方法才能返回父类实例。

    render() {
        let _this = this;
        let {categories} = this.props;

        return (
            <div className="main_content archives">
                <div className="line_paper mb20 shadow sticker p20">
                    <h2>文章分类：</h2>
                    <ul>
                        {
                            categories.map(function (cat) {
                                return <li className="cat-item" key={cat.id}>
                                    <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                                </li>
                            })
                        }

                    </ul>
                </div>
            </div>
        )
    }


}

