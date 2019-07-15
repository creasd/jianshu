import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './index.css'
import '../../static/iconfont/iconfont.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header_container'>
                    <a href='/' className='jianshuLogo'></a>
                    <div className='headerNav'>
                        <div className='headerNav_index'>首页</div>
                        <div className='headerNav_download'>下载App</div>
                        <div className='headerNav_denglu'>登录</div>
                        <div className='headerNav_font'><i className='iconfont'>&#xe636;</i></div>
                        <div className='header_search'>
                            <CSSTransition
                                in={this.props.focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <input
                                    placeholder='搜索'
                                    className={this.props.focused ? 'focused' : ''}
                                    onFocus={this.props.handleFocused}
                                    onBlur={this.props.handleBlur}
                                />
                            </CSSTransition>
                            <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe637;</i>
                        </div>
                    </div>
                    <div className='headerRight'>
                        <div className='headerRight_write'><i className='iconfont'>&#xe615;</i>写文章</div>
                        <div className='headerRight_zhuce'>注册</div>
                    </div>
                </div>
            </div>
        )
    }
    handleFocused() {
        this.setState(() => {
            return {
                focused: true
            }
        })
    }
    handleBlur() {
        this.setState(() => {
            return {
                focused: false
            }
        })
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handleFocused() {
            const action = {
                type: "search_focus"
            }
            dispatch(action);
        },
        handleBlur() {
            const action = {
                type: "search_blur"
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);