<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<template>
    <div class="main">

        <div class="son">
            <div>
                <el-button type="primary" plain>修改</el-button>
                <el-button type="success" plain @click="open">保存</el-button>
                <el-popconfirm title="确定删除吗？">
                    <el-button type="danger" plain>删除</el-button>
                </el-popconfirm>
                <el-button type="success" plain style="position: absolute;right: 100px;margin-right: 50px; "
                    @click="dra1 = true">入库</el-button>

                <el-drawer :visible.sync="dra1" :with-header="false" >
                    <div class="demo-drawer__content" style="position: 10px;margin: 10px;">
                        <h1>添加入库信息</h1>
                        <el-form>
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <div class="demo-drawer__footer" style="align-items: center; width: 300px;">
                                <el-button @click="cancelForm">取 消</el-button>
                                <el-button type="primary">确 定</el-button>
                            </div>
                        </el-form>
                    </div>
                </el-drawer>

                <el-button type="danger" plain style="position: absolute;right: 183px;margin-right: 50px;"
                    @click="dra2 = true">出库</el-button>

                <el-drawer :visible.sync="dra2" :with-header="false">
                    <div class="demo-drawer__content" style="position: 10px;margin: 10px;">
                        <h1>添出库信息</h1>
                        <el-form>

                        </el-form>
                        <div class="demo-drawer__footer">
                            <el-button @click="cancelForm">取 消</el-button>
                            <el-button type="primary">确 定</el-button>
                        </div>
                    </div>
                </el-drawer>

                <el-button type="warning" plain style="position: absolute;right: 10px;margin-right: 30px;">导出记录</el-button>
            </div>
            <div>

                <h1>库存记录</h1>
                <template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <div class="footl">
                <el-pagination background layout="prev, pager, next" :total="80">
                </el-pagination>
            </div>
        </div>
        <div class="son">
            <div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="success" plain>搜索</el-button>
                <el-button type="warning" plain style="position: absolute;right: 10px;margin-right: 30px;">导出记录</el-button>
            </div>
            <div>
                <h1>入库记录</h1>
                <template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <div class="footl">
                <el-pagination background layout="prev, pager, next" :total="80">
                </el-pagination>
            </div>
        </div>
        <div class="son">
            <div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="success" plain>搜索</el-button>
                <el-button type="warning" plain style="position: absolute;right: 10px;margin-right: 30px;">导出记录</el-button>
            </div>
            <div>
                <h1>出库/物料信息</h1>
                <template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
            <div class="footl">
                <el-pagination background layout="prev, pager, next" :total="80">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dra1: false,
            dra2: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '80px',
             timer: null,
        };
    },
    methods: {
        open1() {
            this.$message({
                showClose: true,
                message: '保存成功',
                type: 'success'
            });
        },
        open2() {
            this.$message({
                showClose: true,
                message: '保存失败',
                type: 'success'
            });
        },
        cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    display: flex;
    flex-direction: column;
}

.el-input {
    width: 300px;
    margin-right: 10px;
}

.son {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 6px;
    align-items: center;
    width: 97%;
    padding: 20px;
    margin-top: 10px;
}

.footl {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
}
</style>