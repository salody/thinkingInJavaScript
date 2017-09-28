/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/23
 */

function drawDiagonal() {
    const ctx = document.getElementById('diagonal').getContext('2d');

    // save a copy of current drawing state
    // Saving the context state before transforming it will allow us to restore it later.
    ctx.save();

    // move the drawing context to the right and down
    ctx.translate(70, 140);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(70, -70);
    ctx.stroke();

    // restore the old drawing state.恢复原来的起始状态
    ctx.restore();

}

window.addEventListener('load', drawDiagonal)